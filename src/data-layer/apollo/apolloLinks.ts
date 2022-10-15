import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { config } from '@camp/config';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: config.schemaUrl });

export const apolloLinks = from([errorLink, httpLink]);
