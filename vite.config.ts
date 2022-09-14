/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vitest" />

import { getEnv, toInteger } from '@fullstacksjs/toolbox';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
  ],
  server: {
    port: toInteger(getEnv('PORT', 'PORT'), 3000),
    host: getEnv('HOST'),
    proxy: {
      '/graphql': {
        target: getEnv('API_PROXY_TARGET'),
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
