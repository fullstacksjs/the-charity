/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
  ],
  server: {
    proxy: {
      '/graphql': {
        target: process.env.API_PROXY_TARGET,
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
  envPrefix: 'APP',
});
