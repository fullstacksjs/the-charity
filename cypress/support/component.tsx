import './commands';

import { ApolloProvider } from '@apollo/client';
import { ModalsProvider } from '@mantine/modals';
import { ReactLocation, Router } from '@tanstack/react-location';
import { mount } from 'cypress/react18';

// NOTE: Cypress has issues with ts path alias we can ignore it for now
import { apolloClient } from '../../src/data-layer';
import { ThemeProvider } from '../../src/design';

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider client={apolloClient}>
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
