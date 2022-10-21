/// <reference types="vitest" />

import { getEnv, toInteger } from '@fullstacksjs/toolbox';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    svgr(),
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
    environment: 'jsdom',
    globals: true,
  },
  envPrefix: 'APP',
});
