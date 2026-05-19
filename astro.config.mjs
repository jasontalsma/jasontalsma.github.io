import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jasontalsma.github.io',
  base: '/',
  integrations: [react()],
  vite: {
    plugins: [tailwind()],
    optimizeDeps: {
      exclude: ['astro'],
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
