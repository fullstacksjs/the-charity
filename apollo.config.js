module.exports = {
  client: {
    service: {
      name: 'the-charity-frontend',
      url: 'https://the-charity-backend-staging.herokuapp.com/graphql',
    },
    includes: ['./src/data-layer/**/*.graphql', './src/data-layer/**/*.ts'],
    excludes: ['./src/data-layer/operations/__generated__/*.ts'],
  },
};
