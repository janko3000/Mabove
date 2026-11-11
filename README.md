# mabove.ch

Landingpage von mabove – Markus Bolliger Verwaltungen. Astro (statisch) und Tailwind CSS, zweisprachig DE/EN, Kontaktformular über PHP auf Hostpoint.

## Lokal starten

Voraussetzung: Node.js 22 (LTS).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt dist/
```

`npm install` legt beim ersten Mal `package-lock.json` an. Diese Datei mit committen, die GitHub Action braucht sie (`npm ci`).

`npm run dev` führt kein PHP aus. Das Formular lokal so testen:

```bash
npm run build
php -S localhost:8000 -t dist
```

## Vor dem ersten Deployment

1. **PHPMailer** ist mitgeliefert (Version 7.2.0, `public/api/PHPMailer/`, nur `src/PHPMailer.php`, `src/SMTP.php`, `src/Exception.php`, `LICENSE`). Für ein Update diese Dateien aus https://github.com/PHPMailer/PHPMailer ersetzen.
2. **mail-config.php** aus `mail-config.example.php` erstellen, Passwort und Empfänger eintragen und auf Hostpoint ins Home-Verzeichnis laden (`~/mail-config.php`, ausserhalb des Webroots). Nicht committen.
3. **GitHub Secrets** setzen: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` (z. B. `/www/mabove.ch/`).
4. PHP-Version auf Hostpoint: 8.1 oder neuer.

Danach deployt jeder Push auf `main` automatisch.

## Struktur

- `src/i18n/de.ts`, `src/i18n/en.ts`: alle Texte
- `src/components/`: Abschnitte der Seite
- `src/styles/global.css`: Farben, Schrift, Grundstile
- `public/api/contact.php`: Formularversand
- `public/logo.svg`, `logo-mark.svg`, `favicon.svg`: Logo-Dateien

## Platzhalter vor dem Livegang

- Porträtfoto: `src/assets/portrait-placeholder.jpg` ersetzen (Hochformat 4:5)
- Adresse «Musterstrasse 11, 8003 Zürich» in `de.ts`/`en.ts` und `BaseLayout.astro` (JSON-LD, PLZ)
- UID / Handelsregister im Impressum
- Impressum und Datenschutz rechtlich prüfen lassen
- `logo.svg`: Text in Pfade umwandeln (Inkscape: Objekt in Pfad), sonst hängt die Darstellung von der Systemschrift ab
