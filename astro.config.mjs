// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Standard: Live-Site auf Hostpoint (www.mabove.ch, Root-Pfad).
// Für die Vorschau auf GitHub Pages setzt der Workflow .github/workflows/pages.yml
// SITE_URL=https://janko3000.github.io und BASE_PATH=/Mabove.
const site = process.env.SITE_URL || 'https://www.mabove.ch';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
