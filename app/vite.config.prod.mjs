import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        dir: 'dist',
        entryFileNames: 'starter-bundle.js',
        chunkFileNames: 'starter-bundle.js',
        manualChunks: undefined,
      },
    },
  },
});
