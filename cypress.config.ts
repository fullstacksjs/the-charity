import { getBooleanEnv, getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';

import { processFile } from './configs/vite/cypress-vite';

const port = toInteger(getEnv('PORT', ''), 3000);

export default defineConfig({
  e2e: {
    baseUrl: `https://127.0.0.1:${port}`,
    projectId: '8jt3ix',
    experimentalSessionAndOrigin: true,
    video: getBooleanEnv('CYPRESS_RECORD_VIDEO', true),
    videoUploadOnPasses: false,
    setupNodeEvents(on) {
      on('file:preprocessor', processFile);
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
