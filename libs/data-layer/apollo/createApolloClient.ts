import { ApolloClient, from, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { config } from '@camp/config';

import { cache } from './cache';

export function createApolloClient(getAccessTokenSilently: () => Promise<any>) {
  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();

    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const httpLink = new HttpLink({ uri: config.schemaUrl });

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache,
    connectToDevTools: config.apolloDevTools,
  });

  return client;
}
