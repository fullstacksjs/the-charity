import { getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import path from 'path';

const port = toInteger(getEnv('PORT', ''), 3000);

export default defineConfig({
  e2e: {
    baseUrl: `http://127.0.0.1:${port}`,
    projectId: '8jt3ix',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor(path.resolve(__dirname, './vite.config.ts')),
      );
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
