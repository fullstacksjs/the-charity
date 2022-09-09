import { ApolloClient, InMemoryCache } from '@apollo/client';

import { getEnv } from '../config';

const env = getEnv();

export const client = new ApolloClient({
  uri: env.GRAPHQL_SCHEMA_URL,
  cache: new InMemoryCache(),
});
