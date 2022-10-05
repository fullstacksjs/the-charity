import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { config } from '@camp/config';

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

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  resolvers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Mutation: {
      createProject: (_, variables) => ({
        id: `RANDOM_ID_${Math.floor(Math.random() * 1000)}`,
        name: variables.name,
      }),
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export const ApolloProvider = (props: Props) => (
  <BaseApolloProvider client={apolloClient} {...props} />
);
