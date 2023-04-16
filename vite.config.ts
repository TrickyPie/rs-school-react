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
        'src/tests/*',
        'src/redux/reducer.tsx',
        'src/components/cards/thunk.tsx',
        'src/components/cards/cards-slice.tsx',
        'src/components/PlantModal/plant-slice.tsx',
        'src/components/PlantModal/plant-thunk.tsx',
        'src/store.tsx',
      ],
      enabled: true,
      reporter: ['text'],
      all: true,
    },
  },
});
