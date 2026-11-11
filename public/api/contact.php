<?php
/**
 * Kontaktformular mabove.ch
 *
 * Nimmt das Formular entgegen (fetch/JSON oder normaler POST), prüft alle Angaben
 * und versendet die Nachricht per SMTP (PHPMailer) über das Postfach info@mabove.ch.
 * Empfängeradressen und SMTP-Zugang stehen ausschliesslich in mail-config.php
 * ausserhalb des Webroots.
 */

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;
const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;
const MIN_ELAPSED_MS = 3000;

/** Erlaubte Endungen und die dazu passenden MIME-Typen laut Dateiinhalt. */
const ALLOWED_TYPES = [
    'pdf'  => ['application/pdf'],
    'doc'  => ['application/msword', 'application/vnd.ms-office', 'application/x-ole-storage', 'application/CDFV2'],
    'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'],
    'xls'  => ['application/vnd.ms-excel', 'application/vnd.ms-office', 'application/x-ole-storage', 'application/CDFV2'],
    'xlsx' => ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip'],
    'jpg'  => ['image/jpeg'],
    'jpeg' => ['image/jpeg'],
    'png'  => ['image/png'],
];

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');
$lang = (($_POST['lang'] ?? 'de') === 'en') ? 'en' : 'de';

/** Antwort als JSON (fetch) oder als Weiterleitung zurück zum Formular (ohne JavaScript). */
function respond(bool $ok, string $error = 'general'): never
{
    global $wantsJson, $lang;

    if ($wantsJson) {
        http_response_code($ok ? 200 : ($error === 'general' ? 500 : 422));
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
        exit;
    }

    $home = $lang === 'en' ? '/en/' : '/';
    $target = $ok ? 'status-sent' : ($error === 'file' ? 'status-file' : 'status-error');
    header('Location: ' . $home . '#' . $target, true, 303);
    exit;
}

function cleanLine(string $value): string
{
    // Keine Zeilenumbrüche oder Steuerzeichen in Kopfzeilen (Header-Injection)
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return trim($value);
}

function cleanText(string $value): string
{
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return trim($value);
}

function cleanFilename(string $name, string $ext): string
{
    $base = pathinfo($name, PATHINFO_FILENAME);
    $map = ['ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 'Ä' => 'Ae', 'Ö' => 'Oe', 'Ü' => 'Ue', 'ß' => 'ss', 'é' => 'e', 'è' => 'e', 'à' => 'a'];
    $base = strtr($base, $map);
    $base = preg_replace('/[^A-Za-z0-9._-]+/', '_', $base) ?? '';
    $base = trim($base, '._-');
    if ($base === '') {
        $base = 'dokument';
    }
    return mb_substr($base, 0, 80) . '.' . $ext;
}

function loadConfig(): array
{
    $candidates = array_filter([
        getenv('MABOVE_MAIL_CONFIG') ?: null,
        dirname(__DIR__, 3) . '/mail-config.php', // z. B. ~/mail-config.php bei ~/www/mabove.ch/api/
        dirname(__DIR__, 2) . '/mail-config.php',
    ]);
    foreach ($candidates as $path) {
        if (is_file($path)) {
            $config = require $path;
            if (is_array($config)) {
                return $config;
            }
        }
    }
    throw new RuntimeException('mail-config.php nicht gefunden');
}

// ---------------------------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit;
}

// Anfrage grösser als post_max_size: PHP liefert dann leere $_POST/$_FILES
if (empty($_POST) && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0) {
    respond(false, 'file');
}

// Spam-Schutz: Honeypot muss leer sein, Mindestdauer zwischen Laden und Absenden.
// Bei Treffer still «Erfolg» melden, damit Bots nichts lernen.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respond(true);
}
$elapsed = $_POST['elapsed'] ?? '';
if ($elapsed !== '' && (!ctype_digit((string) $elapsed) || (int) $elapsed < MIN_ELAPSED_MS)) {
    respond(true);
}

$name = cleanLine((string) ($_POST['name'] ?? ''));
$email = cleanLine((string) ($_POST['email'] ?? ''));
$message = cleanText((string) ($_POST['message'] ?? ''));
$isQuote = ($_POST['quote'] ?? '') === '1';

if ($name === '' || $email === '' || $message === '') {
    respond(false, 'required');
}
if (mb_strlen($name) > MAX_NAME || mb_strlen($message) > MAX_MESSAGE || mb_strlen($email) > MAX_EMAIL) {
    respond(false, 'required');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'email');
}

// Dateien prüfen (verbindlich, per Dateiinhalt)
$attachments = [];
if (isset($_FILES['files']) && is_array($_FILES['files']['name'] ?? null)) {
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $total = 0;
    $count = count($_FILES['files']['name']);

    for ($i = 0; $i < $count; $i++) {
        $error = $_FILES['files']['error'][$i];
        if ($error === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($error !== UPLOAD_ERR_OK) {
            respond(false, 'file');
        }

        $tmp = $_FILES['files']['tmp_name'][$i];
        $original = (string) $_FILES['files']['name'][$i];
        $size = (int) $_FILES['files']['size'][$i];
        $ext = strtolower(pathinfo($original, PATHINFO_EXTENSION));

        if (!is_uploaded_file($tmp) || $size <= 0 || $size > MAX_FILE_SIZE || !isset(ALLOWED_TYPES[$ext])) {
            respond(false, 'file');
        }
        $mime = (string) $finfo->file($tmp);
        if (!in_array($mime, ALLOWED_TYPES[$ext], true)) {
            respond(false, 'file');
        }

        $total += $size;
        if (count($attachments) >= MAX_FILES || $total > MAX_TOTAL_SIZE) {
            respond(false, 'file');
        }

        $attachments[] = ['path' => $tmp, 'name' => cleanFilename($original, $ext), 'size' => $size, 'mime' => $mime];
    }
}

// Dateien ohne Häkchen (z. B. ohne JavaScript): als Offertenanfrage behandeln
if ($attachments !== []) {
    $isQuote = true;
}

// Versand
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

try {
    $config = loadConfig();

    $mail = new PHPMailer(true);
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    // 'ssl' (Port 465), 'tls' (Port 587) oder 'none' (nur lokaler Test mit Mailpit)
    $secure = $config['smtp_secure'] ?? 'ssl';
    if ($secure === 'none') {
        $mail->SMTPSecure = '';
        $mail->SMTPAutoTLS = false;
    } else {
        $mail->SMTPSecure = $secure === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    }
    $mail->SMTPAuth = ($config['smtp_user'] ?? '') !== '';
    $mail->Username = $config['smtp_user'] ?? '';
    $mail->Password = $config['smtp_pass'] ?? '';

    // Absender immer das eigene Postfach (SPF/DKIM), Antwort an die anfragende Person
    $mail->setFrom($config['from'], $config['from_name'] ?? 'mabove.ch');
    $mail->addAddress($config['to']);
    if (!empty($config['cc'])) {
        $mail->addCC($config['cc']);
    }
    $mail->addReplyTo($email, $name);

    $kind = $isQuote ? 'Offertenanfrage' : 'Kontaktanfrage';
    $mail->Subject = sprintf('[mabove.ch] %s von %s', $kind, $name);

    $fileLines = $attachments === []
        ? '(keine)'
        : implode("\n", array_map(
            static fn(array $a): string => sprintf('- %s (%s KB)', $a['name'], number_format($a['size'] / 1024, 0, '.', "'")),
            $attachments
        ));

    $mail->isHTML(false);
    $mail->Body = implode("\n", [
        $kind . ' über mabove.ch',
        '',
        'Name:    ' . $name,
        'E-Mail:  ' . $email,
        'Sprache: ' . strtoupper($lang),
        '',
        'Nachricht:',
        $message,
        '',
        'Anhänge:',
        $fileLines,
    ]);

    foreach ($attachments as $a) {
        $mail->addAttachment($a['path'], $a['name'], PHPMailer::ENCODING_BASE64, $a['mime']);
    }

    $mail->send();
} catch (MailException | Throwable $e) {
    error_log('[mabove contact] ' . $e->getMessage());
    respond(false, 'general');
} finally {
    // Nichts auf dem Server behalten
    foreach ($attachments as $a) {
        if (is_file($a['path'])) {
            @unlink($a['path']);
        }
    }
}

respond(true);
