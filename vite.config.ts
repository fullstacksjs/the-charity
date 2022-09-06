/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setupTest.ts',
    // NOTE: this is needed for @testing-library/jest-dom
    globals: true,
  },
});
