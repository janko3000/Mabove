import type { Dict } from './de';

// All English texts. Must match the structure of de.ts.

export const en: Dict = {
  lang: 'en',
  ogLocale: 'en_GB',

  meta: {
    title: 'mabove – Property management in Zurich and Aargau',
    description:
      'mabove manages rental properties and condominium associations in Zurich, the Zurich Unterland and Aargau. Personal service and a lean organisation, including for smaller properties.',
  },

  skipLink: 'Skip to content',

  header: {
    homeLabel: 'mabove, go to home page',
    brand: 'mabove',
    tagline: 'Markus Bolliger Verwaltungen',
    navLabel: 'Main navigation',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    nav: {
      services: 'Services',
      about: 'Contact person',
      contact: 'Contact',
    },
    languageLabel: 'Choose language',
    languageCurrent: 'English, current language',
    languageOther: 'Deutsch',
  },

  hero: {
    title: 'Property management for smaller properties',
    subtitle:
      'We manage rental properties and condominium associations in Zurich, the Zurich Unterland and Aargau. Personal service, lean organisation.',
    cta: 'Request a quote',
    link: 'Services',
    logoAlt: 'mabove – Markus Bolliger Verwaltungen',
  },

  services: {
    title: 'Services',
    keywordsLabel: 'Keywords',
    items: [
      {
        title: 'Rental properties',
        text: 'We look after your property and your tenants.',
        keywords: [
          'Letting and tenant changes',
          'Rent collection',
          'Maintenance and repairs',
          'Point of contact for tenants',
        ],
      },
      {
        title: 'Condominium ownership',
        text: 'We manage your association in line with its regulations and the law.',
        keywords: [
          "Owners' meeting and minutes",
          'Implementing resolutions',
          'Renewal fund',
          'Upkeep of common areas',
        ],
      },
      {
        title: 'Accounting and service charges',
        text: 'Clear figures, presented transparently.',
        keywords: [
          'Property accounting',
          'Service and heating cost statements',
          'Budget and annual accounts',
          'Owner statements',
        ],
      },
    ],
  },

  advantages: {
    title: 'Why mabove',
    items: [
      {
        title: 'Small properties welcome.',
        text: 'Many management firms focus on large buildings. We are glad to look after properties and associations with only a few units.',
      },
      {
        title: 'Lean structure.',
        text: 'No expensive office, no costly IT. That keeps costs down, not quality.',
      },
      {
        title: 'One point of contact.',
        text: 'You deal directly with the owner, not with changing staff.',
      },
    ],
  },

  region: {
    text: 'Active in Zurich, the Zurich Unterland and Aargau.',
  },

  about: {
    title: 'Your contact',
    name: 'Markus Bolliger',
    role: 'Business economist (FH), owner',
    text: 'I look after your property personally, from the first enquiry to the annual statement. Get in touch if you are looking for a manager who takes small properties seriously.',
    imageAlt: 'Portrait of Markus Bolliger',
  },

  contact: {
    title: 'Contact',
    intro:
      'Send us a message. If you would like a quote, you can attach documents about the property.',
    detailsLabel: 'Contact details',
    company: 'mabove',
    companyLong: 'Markus Bolliger Verwaltungen',
    street: 'Musterstrasse 11',
    city: '8003 Zürich',
    email: 'info@mabove.ch',
    form: {
      label: 'Contact form',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      quote: 'Request a quote',
      files: 'Property documents',
      filesHint:
        'You can upload documents about the property here, for example regulations, minutes or statements.',
      filesLimits:
        'PDF, Word, Excel, JPG or PNG. Up to 5 files, max. 10 MB each, max. 15 MB in total.',
      filesListLabel: 'Selected files',
      fileRemove: 'Remove',
      fileRemoveLabel: 'Remove file:',
      honeypot: 'Website (please leave empty)',
      submit: 'Send message',
      sending: 'Sending message …',
      privacyBefore:
        'By sending this form, your details are used to process your enquiry. Details in the ',
      privacyLink: 'privacy policy',
      privacyAfter: '.',
    },
    messages: {
      success: 'Thank you. Your message has been received. We will get back to you soon.',
      error:
        'Your message could not be sent. Please try again later or write to info@mabove.ch.',
      file: 'This file cannot be uploaded. Allowed are PDF, Word, Excel, JPG and PNG up to 10 MB.',
      required: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
      tooMany: 'You can upload a maximum of 5 files.',
      totalSize: 'The files are larger than 15 MB in total.',
    },
  },

  footer: {
    copyright: 'mabove',
    legalLabel: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy',
  },

  imprint: {
    title: 'Imprint',
    metaTitle: 'Imprint – mabove',
    metaDescription: 'Imprint of mabove – Markus Bolliger Verwaltungen.',
    draftNote: 'Draft: to be reviewed before publication.',
    sections: [
      {
        heading: 'Responsible for content',
        paragraphs: [
          'mabove – Markus Bolliger Verwaltungen',
          'Owner: Markus Bolliger',
          'Musterstrasse 11, 8003 Zürich, Switzerland',
          'Email: info@mabove.ch',
        ],
      },
      {
        heading: 'Company details',
        paragraphs: ['UID: CHE-000.000.000 (placeholder)', 'Commercial register: [placeholder, if applicable]'],
      },
      {
        heading: 'Liability for content',
        paragraphs: [
          'The content of this website is prepared with care. We accept no liability for its accuracy, completeness or timeliness. Liability claims arising from the use of the content are excluded to the extent permitted by law.',
        ],
      },
      {
        heading: 'Liability for links',
        paragraphs: [
          'The operators of external websites we link to are solely responsible for their content. We accept no responsibility for it.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Privacy policy',
    metaTitle: 'Privacy – mabove',
    metaDescription: 'Privacy policy of mabove – Markus Bolliger Verwaltungen.',
    draftNote: 'Draft: to be reviewed before publication.',
    sections: [
      {
        heading: 'Controller',
        paragraphs: [
          'The controller for the processing of personal data on this website is mabove – Markus Bolliger Verwaltungen, owner Markus Bolliger, Musterstrasse 11, 8003 Zürich, Switzerland, info@mabove.ch.',
          'This policy is based on the Swiss Federal Act on Data Protection (FADP).',
        ],
      },
      {
        heading: 'Hosting and server log files',
        paragraphs: [
          'This website is hosted by Hostpoint AG in Switzerland. When you visit the website, the server stores technically necessary information in log files, for example IP address, date and time, the page requested and the browser used. This data is used for secure operation and is deleted after a short period.',
        ],
      },
      {
        heading: 'Contact form',
        paragraphs: [
          'When you use the contact form, we process your name, email address, message and any uploaded documents. We use this information only to handle your enquiry or quote request.',
          'The information is sent by email. Uploaded files are only processed on the server for sending and are deleted afterwards. We keep the emails for as long as needed to handle your enquiry and to meet any legal retention obligations.',
        ],
      },
      {
        heading: 'Forwarding to Google (Gmail)',
        paragraphs: [
          'Enquiries from the contact form are forwarded to email accounts at Google (Gmail). Your information may therefore be transferred to the USA or other countries whose level of data protection does not always match that of Switzerland.',
        ],
      },
      {
        heading: 'No cookies, no tracking',
        paragraphs: [
          'This website does not set cookies, does not use analytics or tracking services and does not embed third-party content. Fonts are loaded from our own server.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You can request information about the personal data we process about you at any time, and ask for it to be corrected or deleted. To do so, write to info@mabove.ch.',
        ],
      },
    ],
  },
};
