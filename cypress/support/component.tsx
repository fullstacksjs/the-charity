import './commands';
import '@testing-library/cypress/add-commands';

import { ApolloProvider } from '@apollo/client';
import { ReactLocation, Router } from '@tanstack/react-location';
import { mount } from 'cypress/react18';

// NOTE: Cypress has issues with ts path alias we can ignore it for now
import { apolloClient } from '../../src/data-layer';
import { ThemeProvider } from '../../src/design';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Router location={new ReactLocation()} routes={[]}>
            {element}
          </Router>
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
