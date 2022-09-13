/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vitest" />

import { toInteger } from '@fullstacksjs/toolbox';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = toInteger(process.env.PORT!);

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
  ],
  server: {
    port: isNaN(port) ? undefined : port,
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
