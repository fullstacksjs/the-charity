import { getBooleanEnv, getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';
import viteProcessor from 'cypress-vite';

import { config } from './vite.config';

const port = toInteger(getEnv('PORT', ''), 3000);

export default defineConfig({
  e2e: {
    retries: 1,
    baseUrl: `https://127.0.0.1:${port}`,
    projectId: '8jt3ix',
    video: getBooleanEnv('CYPRESS_RECORD_VIDEO', true),
    videoUploadOnPasses: false,
    defaultCommandTimeout: 10000,
    env: {
      APP_AUTH0_AUDIENCE: getEnv('APP_AUTH0_AUDIENCE'),
      APP_AUTH0_DOMAIN: getEnv('APP_AUTH0_DOMAIN'),
      APP_AUTH0_CLIENT_ID: getEnv('APP_AUTH0_CLIENT_ID'),
      APP_API_ENDPOINT: getEnv('APP_API_ENDPOINT'),
      HASURA_ADMIN_SECRET: getEnv('HASURA_ADMIN_SECRET'),
    },
    setupNodeEvents(on) {
      on('file:preprocessor', viteProcessor());
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: config({ https: false }),
    },
  },
});
