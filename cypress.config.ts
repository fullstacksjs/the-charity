import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    projectId: '8jt3ix',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
