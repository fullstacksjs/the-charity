/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vitest" />

import { getEnv, toInteger } from '@fullstacksjs/toolbox';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
  ],
  server: {
    port: toInteger(getEnv('PORT', ''), 3000),
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
