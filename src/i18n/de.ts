// Alle deutschen Texte der Website. Struktur ist für en.ts verbindlich (Typ `Dict`).

export const de = {
  lang: 'de',
  ogLocale: 'de_CH',

  meta: {
    title: 'mabove – Immobilienverwaltung in Zürich und Aargau',
    description:
      'mabove verwaltet Mietliegenschaften und Stockwerkeigentum in Zürich, im Zürcher Unterland und im Aargau. Persönlich und schlank organisiert, auch für kleine Liegenschaften.',
  },

  skipLink: 'Zum Inhalt springen',

  header: {
    homeLabel: 'mabove, zur Startseite',
    brand: 'mabove',
    tagline: 'Markus Bolliger Verwaltungen',
    navLabel: 'Hauptnavigation',
    menuOpen: 'Menü',
    menuClose: 'Menü schliessen',
    nav: {
      services: 'Leistungen',
      about: 'Ansprechpartner',
      contact: 'Kontakt',
    },
    languageLabel: 'Sprache wählen',
    languageCurrent: 'Deutsch, aktuelle Sprache',
    languageOther: 'English',
  },

  hero: {
    title: 'Immobilienverwaltung für kleine Liegenschaften',
    subtitle:
      'Wir verwalten Mietliegenschaften und Stockwerkeigentum in Zürich, im Zürcher Unterland und im Aargau. Persönlich und schlank organisiert.',
    cta: 'Offerte anfragen',
    link: 'Leistungen',
    logoAlt: 'mabove – Markus Bolliger Verwaltungen',
  },

  services: {
    title: 'Leistungen',
    keywordsLabel: 'Stichworte',
    items: [
      {
        title: 'Mietliegenschaften',
        text: 'Wir kümmern uns um Ihre Mietliegenschaft und die Mieterschaft.',
        keywords: [
          'Vermietung und Mieterwechsel',
          'Mietzinsinkasso',
          'Unterhalt und Reparaturen',
          'Ansprechstelle für Mieter',
        ],
      },
      {
        title: 'Stockwerkeigentum',
        text: 'Wir verwalten Ihre Gemeinschaft nach Reglement und Gesetz.',
        keywords: [
          'Eigentümerversammlung und Protokoll',
          'Umsetzung der Beschlüsse',
          'Erneuerungsfonds',
          'Unterhalt gemeinschaftlicher Teile',
        ],
      },
      {
        title: 'Buchhaltung und Nebenkosten',
        text: 'Saubere Zahlen, nachvollziehbar aufbereitet.',
        keywords: [
          'Liegenschaftsbuchhaltung',
          'Nebenkosten- und Heizkostenabrechnung',
          'Budget und Jahresrechnung',
          'Abrechnung an Eigentümer',
        ],
      },
    ],
  },

  advantages: {
    title: 'Warum mabove',
    items: [
      {
        title: 'Auch kleine Liegenschaften.',
        text: 'Viele Verwaltungen konzentrieren sich auf grosse Objekte. Wir betreuen gerne auch Liegenschaften und Gemeinschaften mit wenigen Einheiten.',
      },
      {
        title: 'Schlanke Struktur.',
        text: 'Kein teures Büro, keine aufwendige IT. Das hält die Kosten tief, nicht die Qualität.',
      },
      {
        title: 'Ein Ansprechpartner.',
        text: 'Sie haben direkt mit dem Inhaber zu tun, ohne Umwege über wechselnde Sachbearbeiter.',
      },
    ],
  },

  region: {
    text: 'Tätig in Zürich, im Zürcher Unterland und im Aargau.',
  },

  about: {
    title: 'Ihr Ansprechpartner',
    name: 'Markus Bolliger',
    role: 'Betriebsökonom FH, Inhaber',
    text: 'Ich betreue Ihre Liegenschaft persönlich, von der ersten Anfrage bis zur Jahresabrechnung. Melden Sie sich, wenn Sie eine Verwaltung suchen, die auch kleine Objekte ernst nimmt.',
    imageAlt: 'Porträt von Markus Bolliger',
  },

  contact: {
    title: 'Kontakt',
    intro:
      'Schreiben Sie uns. Für eine Offerte können Sie gleich Unterlagen zur Liegenschaft mitschicken.',
    detailsLabel: 'Kontaktangaben',
    company: 'mabove',
    companyLong: 'Markus Bolliger Verwaltungen',
    street: 'Musterstrasse 11',
    city: '8003 Zürich',
    email: 'info@mabove.ch',
    form: {
      label: 'Kontaktformular',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      quote: 'Offertenanfrage',
      files: 'Unterlagen zur Liegenschaft',
      filesHint:
        'Hier können Sie Unterlagen zur Liegenschaft hochladen, zum Beispiel Reglement, Protokolle oder Abrechnungen.',
      filesLimits:
        'PDF, Word, Excel, JPG oder PNG. Bis 5 Dateien, je höchstens 10 MB, zusammen höchstens 15 MB.',
      filesListLabel: 'Ausgewählte Dateien',
      fileRemove: 'Entfernen',
      fileRemoveLabel: 'Datei entfernen:',
      honeypot: 'Website (bitte leer lassen)',
      submit: 'Nachricht senden',
      sending: 'Nachricht wird gesendet …',
      privacyBefore:
        'Mit dem Absenden werden Ihre Angaben zur Bearbeitung der Anfrage verwendet. Details in der ',
      privacyLink: 'Datenschutzerklärung',
      privacyAfter: '.',
    },
    messages: {
      success:
        'Vielen Dank. Ihre Nachricht ist bei uns angekommen. Wir melden uns bald bei Ihnen.',
      error:
        'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später nochmals oder schreiben Sie an info@mabove.ch.',
      file: 'Diese Datei kann nicht hochgeladen werden. Erlaubt sind PDF, Word, Excel, JPG und PNG bis 10 MB.',
      required: 'Bitte füllen Sie dieses Feld aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      tooMany: 'Sie können höchstens 5 Dateien hochladen.',
      totalSize: 'Die Dateien sind zusammen grösser als 15 MB.',
    },
  },

  footer: {
    copyright: 'mabove',
    legalLabel: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },

  imprint: {
    title: 'Impressum',
    metaTitle: 'Impressum – mabove',
    metaDescription: 'Impressum von mabove – Markus Bolliger Verwaltungen.',
    draftNote: 'Entwurf: vor Veröffentlichung prüfen lassen.',
    sections: [
      {
        heading: 'Verantwortlich für den Inhalt',
        paragraphs: [
          'mabove – Markus Bolliger Verwaltungen',
          'Inhaber: Markus Bolliger',
          'Musterstrasse 11, 8003 Zürich',
          'E-Mail: info@mabove.ch',
        ],
      },
      {
        heading: 'Unternehmensangaben',
        paragraphs: ['UID: CHE-000.000.000 (Platzhalter)', 'Handelsregister: [Platzhalter, falls vorhanden]'],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Haftungsansprüche aus der Nutzung der Inhalte sind ausgeschlossen, soweit gesetzlich zulässig.',
        ],
      },
      {
        heading: 'Haftung für Links',
        paragraphs: [
          'Für Inhalte externer Websites, auf die wir verweisen, sind ausschliesslich deren Betreiber verantwortlich. Wir übernehmen dafür keine Verantwortung.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Datenschutzerklärung',
    metaTitle: 'Datenschutz – mabove',
    metaDescription: 'Datenschutzerklärung von mabove – Markus Bolliger Verwaltungen.',
    draftNote: 'Entwurf: vor Veröffentlichung prüfen lassen.',
    sections: [
      {
        heading: 'Verantwortliche Stelle',
        paragraphs: [
          'Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist mabove – Markus Bolliger Verwaltungen, Inhaber Markus Bolliger, Musterstrasse 11, 8003 Zürich, info@mabove.ch.',
          'Diese Erklärung richtet sich nach dem Schweizer Bundesgesetz über den Datenschutz (DSG).',
        ],
      },
      {
        heading: 'Hosting und Server-Logdateien',
        paragraphs: [
          'Die Website wird bei der Hostpoint AG in der Schweiz betrieben. Beim Aufruf der Website speichert der Server technisch notwendige Angaben in Logdateien, zum Beispiel IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und verwendeter Browser. Diese Daten dienen dem sicheren Betrieb und werden nach kurzer Zeit gelöscht.',
        ],
      },
      {
        heading: 'Kontaktformular',
        paragraphs: [
          'Wenn Sie das Kontaktformular verwenden, bearbeiten wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Nachricht und allfällige hochgeladene Unterlagen. Wir verwenden diese Angaben nur, um Ihre Anfrage oder Offertenanfrage zu bearbeiten.',
          'Die Angaben werden per E-Mail übermittelt. Hochgeladene Dateien werden auf dem Server nur für den Versand verarbeitet und danach gelöscht. Die E-Mails bewahren wir so lange auf, wie es für die Bearbeitung und allfällige gesetzliche Aufbewahrungspflichten nötig ist.',
        ],
      },
      {
        heading: 'Weiterleitung an Google (Gmail)',
        paragraphs: [
          'Anfragen aus dem Kontaktformular werden an E-Mail-Postfächer bei Google (Gmail) weitergeleitet. Dabei können Ihre Angaben in die USA oder andere Länder gelangen, deren Datenschutzniveau nicht in jedem Fall dem schweizerischen entspricht.',
        ],
      },
      {
        heading: 'Keine Cookies, kein Tracking',
        paragraphs: [
          'Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und bindet keine Inhalte von Drittanbietern ein. Die Schriften werden von unserem eigenen Server geladen.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        paragraphs: [
          'Sie können jederzeit Auskunft über Ihre bei uns bearbeiteten Personendaten verlangen sowie deren Berichtigung oder Löschung beantragen. Schreiben Sie dazu an info@mabove.ch.',
        ],
      },
    ],
  },
};

export type Dict = typeof de;
