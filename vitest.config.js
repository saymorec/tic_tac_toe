import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './setup.js',
    environment: 'jsdom',
  },
});
