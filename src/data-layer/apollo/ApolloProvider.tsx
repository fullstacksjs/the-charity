import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
} from '@apollo/client';

import { apolloLinks } from './apolloLinks';
import { cache } from './cache';

export const apolloClient = new ApolloClient({
  link: apolloLinks,
  cache,
});

interface Props {
  children: React.ReactNode;
}

export const ApolloProvider = (props: Props) => (
  <BaseApolloProvider client={apolloClient} {...props} />
);
