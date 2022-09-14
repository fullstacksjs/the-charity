const config = {
  client: {
    service: {
      name: 'the-charity-frontend',
      url: 'https://the-charity-backend-staging.herokuapp.com/graphql',
    },
    includes: ['./src/operations/**/*.graphql', './src/operations/**/*.ts'],
    excludes: ['./src/operations/__generated/*.ts'],
  },
};
export default config;
