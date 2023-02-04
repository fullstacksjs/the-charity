/// <reference types="vitest" />
import {
  compact,
  getBooleanEnv,
  getEnv,
  toInteger,
} from '@fullstacksjs/toolbox';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { type UserConfig } from 'vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { cypressAliases } from './configs/vite/cypressAliases';

interface Options {
  https?: boolean;
}
export const config = ({ https = true }: Options = {}): UserConfig => ({
  plugins: compact([
    https ? basicSsl() : undefined,
    checker({ typescript: true }),
    tsconfigPaths(),
    cypressAliases(),
    react({ exclude: /\.stories\.(t|j)sx?$/ }),
    svgr(),
  ]),
  server: {
    port: toInteger(getEnv('PORT', ''), 3000),
    host: getEnv('HOST'),
    open: getBooleanEnv('OPEN'),
    https,
    strictPort: true,
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
    setupFiles: ['./configs/vitest/setup.ts'],
  },
  envPrefix: 'APP',
});

export default defineConfig(config());
