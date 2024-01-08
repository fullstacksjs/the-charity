import { Config } from '@fullstacksjs/config';
import { defineConfig } from 'cypress';
import viteProcessor from 'cypress-vite';

import { config } from './vite.config';

const envs = new Config({
  retries: Config.number({ default: 1 }),
  cypress: Config.object({
    port: Config.number({ default: 3000 }),
    host: Config.string({ default: 'localhost' }),
    retries: Config.number({ default: 1 }),
    video: Config.boolean({ default: true }),
  }),
  auth0: Config.object({
    audience: Config.string().required(),
    domain: Config.string().required(),
    clientId: Config.string().required(),
  }),
  api: Config.object({
    endpoint: Config.string().required(),
    secret: Config.string().required(),
  }),
}).parse({
  cypress: {
    port: process.env.PORT,
    host: process.env.HOST,
    retries: process.env.CYPRESS_RETRIES,
    video: process.env.CYPRESS_RECORD_VIDEO,
  },
  auth0: {
    audience: process.env.APP_AUTH0_AUDIENCE,
    domain: process.env.APP_AUTH0_DOMAIN,
    clientId: process.env.APP_AUTH0_CLIENT_ID,
  },
  api: {
    endpoint: process.env.APP_API_ENDPOINT,
    secret: process.env.APP_HASURA_ADMIN_SECRET,
  },
});

export default defineConfig({
  e2e: {
    retries: envs.get('cypress.retries'),
    baseUrl: `https://${envs.get('cypress.host')}:${envs.get('cypress.port')}`,
    projectId: '8jt3ix',
    video: envs.get('cypress.video'),
    defaultCommandTimeout: 10000,
    experimentalMemoryManagement: true,
    env: {
      APP_AUTH0_AUDIENCE: envs.get('auth0.audience'),
      APP_AUTH0_DOMAIN: envs.get('auth0.domain'),
      APP_AUTH0_CLIENT_ID: envs.get('auth0.clientId'),
      APP_API_ENDPOINT: envs.get(`api.endpoint`),
      APP_HASURA_ADMIN_SECRET: envs.get('api.secret'),
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
