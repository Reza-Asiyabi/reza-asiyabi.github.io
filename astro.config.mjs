import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://reza-asiyabi.github.io',
  integrations: [tailwind()],
  output: 'static',
});
