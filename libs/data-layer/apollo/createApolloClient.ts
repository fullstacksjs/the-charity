import { ApolloClient, from, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { config } from '@camp/config';

import { cache } from './cache';

export function createApolloClient(
  getAccessTokenSilently: () => Promise<string>,
) {
  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();

    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        const locationJSON = JSON.stringify(locations ?? []);
        const pathJSON = JSON.stringify(path ?? []);
        console.log(
          `[GraphQL error]: Message: ${message}, Location: "${locationJSON}", Path: ${pathJSON}`,
        );
      });
    if (networkError)
      console.log(`[Network error]: ${JSON.stringify(networkError)}`);
  });

  const httpLink = new HttpLink({ uri: config.schemaUrl });

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache,
    connectToDevTools: config.apolloDevTools,
  });

  return client;
}
