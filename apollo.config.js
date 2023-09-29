require('dotenv').config({ path: '.env.dev' });

module.exports = {
  client: {
    service: {
      name: 'the-charity',
      url: process.env.APP_GRAPHQL_SCHEMA_URL,
      headers: {
        'x-hasura-admin-secret': process.env.APP_HASURA_ADMIN_SECRET,
      },
    },
    includes: ['./libs/data-layer/**/*.ts', './cypress/**/*.ts'],
    excludes: ['./libs/data-layer/api.ts'],
  },
};
