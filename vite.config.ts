import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import viteEslint from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve('./src/variable.less'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()],
  root: path.join(__dirname, 'src'),
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import '${variablePath}';`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components'),
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
});
