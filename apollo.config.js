require('dotenv').config({ path: '.env.dev' });

module.exports = {
  client: {
    service: {
      name: 'the-charity-frontend',
      url: 'https://the-charity.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': process.env.ADMIN_SECRET,
      },
    },
    includes: ['./src/data-layer/**/*.graphql', './src/data-layer/**/*.ts'],
    excludes: ['./src/data-layer/operations/__generated__/*.ts'],
  },
};
