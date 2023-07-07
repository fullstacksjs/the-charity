import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ModalsProvider } from '@mantine/modals';
import { ReactLocation, Router } from '@tanstack/react-location';
import { mount } from 'cypress/react18';

import { ThemeProvider } from '../../../libs/design';

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider
        client={
          new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({ uri: '/api' }),
          })
        }
      >
        <ThemeProvider>
          <Router location={new ReactLocation()} routes={[]}>
            <ModalsProvider>{element}</ModalsProvider>
          </Router>
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
