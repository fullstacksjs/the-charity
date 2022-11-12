import './commands';

import { ApolloProvider } from '@apollo/client';
import { ReactLocation, Router } from '@tanstack/react-location';
import { mount } from 'cypress/react18';

// NOTE: Cypress has issues with ts path alias we can ignore it for now
import { ContextProvider } from '../../src/contexts';
import { apolloClient } from '../../src/data-layer';
import { ThemeProvider } from '../../src/design';

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <ContextProvider>
            <Router location={new ReactLocation()} routes={[]}>
              {element}
            </Router>
          </ContextProvider>
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
