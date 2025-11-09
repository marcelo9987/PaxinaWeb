import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcelofort.dev',
  base: '/PaxinaWeb',
  integrations: [
    tailwind(),
    sitemap()
  ],
  i18n: {
    defaultLocale: 'gl',
    locales: ['gl', 'es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

