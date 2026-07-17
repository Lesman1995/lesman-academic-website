import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        research: 'research/index.html',
        publications: 'publications/index.html',
        teaching: 'teaching/index.html',
        cv: 'cv/index.html',
        contact: 'contact/index.html',
      },
    },
  },
});
