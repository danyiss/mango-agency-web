// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.mangova.agency',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // Emit <xhtml:link rel="alternate" hreflang="..."> per URL so search
      // engines see explicit language pairs in the sitemap, not just in the
      // page <head>.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
      // Stamp every URL with the current build's lastmod so crawlers know
      // when to re-fetch. Vercel rebuilds on every push, so this is fresh.
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});