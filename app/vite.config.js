import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const dsRoot = path.resolve(__dirname, '../kova-design-system');

export default defineConfig({
  plugins: [react()],
  publicDir: dsRoot,
  resolve: {
    alias: {
      '@ds': path.resolve(dsRoot, 'project'),
    },
  },
  server: {
    port: 5173,
    open: true,
    fs: { allow: [path.resolve(__dirname, '..')] },
  },
});
