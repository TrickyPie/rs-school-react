/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: ['node_modules', 'dist', 'coverage', 'cypress'],
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/assets/*',
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/mock',
        'src/pages/page-form/form-type.tsx',
        'src/components/nav/nav-type.tsx',
        'src/tests/*',
        'src/redux/reducer.tsx',
        'src/components/cards/thunk.tsx',
        'src/components/cards/cards-slice.tsx',
        'src/components/PlantModal/plant-slice.tsx',
        'src/components/PlantModal/plant-thunk.tsx',
        'src/store.tsx',
      ],
      provider: 'c8',
      all: true,
      enabled: true,
      reporter: ['text'],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
