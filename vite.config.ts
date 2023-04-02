/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/assets/*',
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/mock',
        'src/pages/page-form/form-type.tsx',
        'src/components/nav/nav-type.tsx',
      ],
      enabled: true,
      reporter: ['text'],
      all: true,
    },
  },
});
