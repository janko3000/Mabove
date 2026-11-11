<?php
/**
 * Vorlage für mail-config.php
 *
 * Kopie als mail-config.php AUSSERHALB des Webroots auf Hostpoint ablegen,
 * empfohlen im Home-Verzeichnis: ~/mail-config.php
 * (contact.php liegt unter ~/www/mabove.ch/api/ und sucht dort zuerst).
 * Die echte Datei gehört nie ins Repository.
 */

return [
    // SMTP des Hostpoint-Postfachs info@mabove.ch
    'smtp_host'   => 'asmtp.mail.hostpoint.ch',
    'smtp_port'   => 465,
    'smtp_secure' => 'ssl', // 'ssl' (Port 465) oder 'tls' (Port 587)
    'smtp_user'   => 'info@mabove.ch',
    'smtp_pass'   => 'PASSWORT-HIER-EINTRAGEN',

    // Absender (muss das eigene Postfach sein)
    'from'        => 'info@mabove.ch',
    'from_name'   => 'mabove.ch',

    // Empfänger
    'to'          => 'empfaenger@example.com',
    'cc'          => 'zweitempfaenger@example.com',
];
