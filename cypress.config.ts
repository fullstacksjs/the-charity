import { getBooleanEnv, getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';
import viteProcessor from 'cypress-vite';

import { config } from './vite.config';

const port = toInteger(getEnv('PORT', ''), 3000);
const host = getEnv('HOST', 'localhost');

export default defineConfig({
  e2e: {
    retries: toInteger(getEnv('CYPRESS_RETRIES', '1')),
    baseUrl: `https://${host}:${port}`,
    projectId: '8jt3ix',
    video: getBooleanEnv('CYPRESS_RECORD_VIDEO', true),
    videoUploadOnPasses: false,
    defaultCommandTimeout: 10000,
    experimentalMemoryManagement: true,
    env: {
      APP_AUTH0_AUDIENCE: getEnv('APP_AUTH0_AUDIENCE'),
      APP_AUTH0_DOMAIN: getEnv('APP_AUTH0_DOMAIN'),
      APP_AUTH0_CLIENT_ID: getEnv('APP_AUTH0_CLIENT_ID'),
      APP_API_ENDPOINT: getEnv('APP_API_ENDPOINT'),
      APP_HASURA_ADMIN_SECRET: getEnv('APP_HASURA_ADMIN_SECRET'),
    },
    setupNodeEvents(on) {
      on('file:preprocessor', viteProcessor());
    },
  },
  component: {
    viewportHeight: 760,
    viewportWidth: 1280,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: config({ https: false }),
    },
  },
});
