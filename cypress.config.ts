import { getBooleanEnv, getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';

import { processFile } from './configs/vite/cypress-vite';
import { config } from './vite.config';

const port = toInteger(getEnv('PORT', ''), 3000);

export default defineConfig({
  e2e: {
    baseUrl: `https://127.0.0.1:${port}`,
    projectId: '8jt3ix',
    video: getBooleanEnv('CYPRESS_RECORD_VIDEO', true),
    videoUploadOnPasses: false,
    env: {
      APP_AUTH0_AUDIENCE: getEnv('APP_AUTH0_AUDIENCE'),
      APP_AUTH0_DOMAIN: getEnv('APP_AUTH0_DOMAIN'),
      APP_AUTH0_CLIENT_ID: getEnv('APP_AUTH0_CLIENT_ID'),
    },
    setupNodeEvents(on) {
      on('file:preprocessor', processFile);
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
