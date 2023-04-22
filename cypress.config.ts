import { defineConfig } from 'cypress';

const config = {
  baseUrl: 'http://localhost:3000',
  video: false,
};

export default defineConfig({
  ...config,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
