// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://c-est-moi.com',
  base: '/c-est-moi/', // Required for GitHub Pages deployment
  output: 'static',
  integrations: [tailwind()],
  trailingSlash: 'always'
});