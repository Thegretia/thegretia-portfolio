import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thegretia-portfolio.vercel.app',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' }
});
