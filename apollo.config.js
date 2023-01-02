require('dotenv').config({ path: '.env.dev' });

module.exports = {
  client: {
    service: {
      name: 'the-charity-frontend',
      url: 'https://the-charity.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
      },
    },
    includes: ['./libs/data-layer/**/*.graphql', './libs/data-layer/**/*.ts'],
    excludes: ['./libs/data-layer/operations/__generated__/*.ts'],
  },
};
