/// <reference types="vitest" />
import { getBooleanEnv, getEnv, toInteger } from '@fullstacksjs/toolbox';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { cypressAliases } from './configs/vite/cypressAliases';

export default defineConfig({
  plugins: [
    basicSsl(),
    tsconfigPaths(),
    cypressAliases(),
    react({ exclude: /\.stories\.(t|j)sx?$/ }),
    svgr(),
  ],
  server: {
    port: toInteger(getEnv('PORT', ''), 3000),
    host: getEnv('HOST'),
    open: getBooleanEnv('OPEN'),
    https: true,
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
