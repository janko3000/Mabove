import { de, type Dict } from './de';
import { en } from './en';

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Dict> = { de, en };

export function t(locale: Locale): Dict {
  return dictionaries[locale];
}

/** Seiten mit sprachabhängigen Pfaden. Deutsch ohne Präfix. */
export const routes = {
  home: { de: '/', en: '/en/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Stellt einem Root-Pfad (z. B. '/logo.svg') den Basis-Pfad der Site voran.
 * Hostpoint: '/' → unverändert. GitHub Pages: '/Mabove/' → '/Mabove/logo.svg'.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return base + (path.startsWith('/') ? path : `/${path}`);
}

export function pathFor(page: RouteKey, locale: Locale): string {
  return withBase(routes[page][locale]);
}

/** Sprungziele der Landingpage je Sprache. */
export const anchors = {
  de: { services: 'leistungen', about: 'ansprechpartner', contact: 'kontakt' },
  en: { services: 'services', about: 'contact-person', contact: 'contact' },
} as const;

export function otherLocale(locale: Locale): Locale {
  return locale === 'de' ? 'en' : 'de';
}
