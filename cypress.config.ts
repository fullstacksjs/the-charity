import { getEnv, toInteger } from '@fullstacksjs/toolbox';
import { defineConfig } from 'cypress';

const port = toInteger(getEnv('PORT', ''), 3000);

export default defineConfig({
  e2e: {
    baseUrl: `http://127.0.0.1:${port}`,
    projectId: '8jt3ix',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
