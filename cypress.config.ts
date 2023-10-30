import { Config } from '@fullstacksjs/config';
import { defineConfig } from 'cypress';
import viteProcessor from 'cypress-vite';

import { config } from './vite.config';

const envs = new Config({
  port: Config.number({ default: 3000 }),
  host: Config.string({ default: 'localhost' }),
  retries: Config.number({ default: 1 }),
  video: Config.boolean({ default: true }),
  auth0Audience: Config.string().require(),
  auth0Domain: Config.string().require(),
  auth0ClientId: Config.string().require(),
  apiEndpoint: Config.string().require(),
  hasuraAdminSecret: Config.string().require(),
}).parse({
  port: process.env.PORT,
  host: process.env.HOST,
  retries: process.env.CYPRESS_RETRIES,
  video: process.env.CYPRESS_RECORD_VIDEO,
  auth0Audience: process.env.APP_AUTH0_AUDIENCE,
  auth0Domain: process.env.APP_AUTH0_DOMAIN,
  auth0ClientId: process.env.APP_AUTH0_CLIENT_ID,
  apiEndpoint: process.env.APP_API_ENDPOINT,
  hasuraAdminSecret: process.env.APP_HASURA_ADMIN_SECRET,
});

export default defineConfig({
  e2e: {
    retries: envs.get('retries'),
    baseUrl: `https://${envs.get('host')}:${envs.get('port')}`,
    projectId: '8jt3ix',
    video: envs.get('video'),
    defaultCommandTimeout: 10000,
    experimentalMemoryManagement: true,
    env: {
      APP_AUTH0_AUDIENCE: envs.get('auth0Audience'),
      APP_AUTH0_DOMAIN: envs.get('auth0Domain'),
      APP_AUTH0_CLIENT_ID: envs.get('auth0ClientId'),
      APP_API_ENDPOINT: envs.get('apiEndpoint'),
      APP_HASURA_ADMIN_SECRET: envs.get('hasuraAdminSecret'),
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
