<?php
/**
 * Mail-Konfiguration NUR für den lokalen Test.
 *
 * Schickt alle Mails an Mailpit auf diesem Rechner (localhost:1025).
 * Es wird nichts wirklich verschickt; die Mails erscheinen unter http://localhost:8025.
 * Enthält keine Zugangsdaten und darf deshalb im Repository liegen.
 */

return [
    'smtp_host'   => '127.0.0.1',
    'smtp_port'   => 1025,
    'smtp_secure' => 'none',
    'smtp_user'   => '',
    'smtp_pass'   => '',

    'from'        => 'info@mabove.ch',
    'from_name'   => 'mabove.ch (lokaler Test)',

    'to'          => 'test-empfaenger@mabove.test',
    'cc'          => '',
];
