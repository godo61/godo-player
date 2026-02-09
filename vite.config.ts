import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom plugin to copy PWA files to dist
const copyPwaAssets = () => {
  return {
    name: 'copy-pwa-assets',
    closeBundle: async () => {
      const files = ['manifest.json', 'sw.js'];
      files.forEach(file => {
        const src = path.resolve(__dirname, file);
        const dest = path.resolve(__dirname, 'dist', file);
        if (fs.existsSync(src)) {
          // Ensure dist directory exists
          if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
            fs.mkdirSync(path.resolve(__dirname, 'dist'));
          }
          fs.copyFileSync(src, dest);
          console.log(`Copied ${file} to dist`);
        }
      });
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPwaAssets()],
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
});