# Startet die Website lokal mit funktionierendem Kontaktformular.
#
#   Website:  http://localhost:8000
#   Mails:    http://localhost:8025   (Mailpit fängt alle Mails ab, nichts wird verschickt)
#
# Aufruf im Ordner "website":   .\lokal-testen\start.ps1
# Beenden:                      Ctrl+C
#
# Mit -EchteMail werden die Mails stattdessen über die Datei lokal-testen\mail-config.php
# (nicht im Repository, Vorlage: mail-config.example.php) wirklich verschickt.

param(
    [switch]$EchteMail,
    [switch]$OhneBuild
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$here = $PSScriptRoot
Set-Location $root

function Find-Exe([string]$name, [string]$packagePattern) {
    $cmd = Get-Command $name -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
    $pkg = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Directory -ErrorAction SilentlyContinue |
        Where-Object Name -like $packagePattern | Select-Object -First 1
    if ($pkg) {
        $exe = Join-Path $pkg.FullName "$name.exe"
        if (Test-Path $exe) { return $exe }
    }
    throw "$name wurde nicht gefunden. Installieren mit: winget install $($packagePattern.TrimEnd('*'))"
}

$php = Find-Exe 'php' 'PHP.PHP.8.4*'
$extDir = Join-Path (Split-Path -Parent $php) 'ext'

if ($EchteMail) {
    $config = Join-Path $here 'mail-config.php'
    if (-not (Test-Path $config)) {
        throw "lokal-testen\mail-config.php fehlt. Kopie von mail-config.example.php anlegen und Passwort eintragen."
    }
} else {
    $config = Join-Path $here 'mail-config.mailpit.php'
    $mailpitExe = Find-Exe 'mailpit' 'axllent.mailpit*'
    $mailpit = Start-Process $mailpitExe -ArgumentList '--smtp-auth-accept-any', '--smtp-auth-allow-insecure' -WindowStyle Hidden -PassThru
    Write-Host "Mailpit läuft: http://localhost:8025" -ForegroundColor Green
}

if (-not $OhneBuild) {
    Write-Host "Baue die Website ..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Build fehlgeschlagen' }
}

$env:MABOVE_MAIL_CONFIG = $config
Write-Host "Website läuft: http://localhost:8000   (Beenden mit Ctrl+C)" -ForegroundColor Green

try {
    & $php `
        -d "extension_dir=$extDir" `
        -d extension=openssl `
        -d extension=mbstring `
        -d extension=fileinfo `
        -d upload_max_filesize=10M `
        -d post_max_size=20M `
        -d display_errors=stderr `
        -S localhost:8000 -t dist
} finally {
    if ($mailpit -and -not $mailpit.HasExited) { Stop-Process -Id $mailpit.Id }
}
