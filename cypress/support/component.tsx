import './commands';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ModalsProvider } from '@mantine/modals';
import { ReactLocation, Router } from '@tanstack/react-location';
import { mount } from 'cypress/react18';

import { ThemeProvider } from '../../src/design';

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider client={new ApolloClient({ cache: new InMemoryCache() })}>
        <ThemeProvider>
          <ModalsProvider>
            <Router location={new ReactLocation()} routes={[]}>
              {element}
            </Router>
          </ModalsProvider>
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
