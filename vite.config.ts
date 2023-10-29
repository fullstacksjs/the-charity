/// <reference types="vitest" />
import { Config } from '@fullstacksjs/config';
import { compact } from '@fullstacksjs/toolbox';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { cypressAliases } from './configs/vite/cypressAliases';

const envs = new Config({
  port: Config.number({ default: 3000 }),
  host: Config.string(),
  target: Config.string(),
  open: Config.boolean(),
}).parse({
  port: process.env.PORT,
  host: process.env.HOST,
  target: process.env.TARGET,
  open: process.env.OPEN,
});

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
    port: envs.get('port'),
    host: envs.get('host'),
    open: envs.get('open'),
    https,
    strictPort: true,
    proxy: {
      '/graphql': {
        target: envs.get('target'),
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
