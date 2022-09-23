import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@camp/data-layer';

import { App } from './App';

describe('<App>', () => {
  it('smoke', () => {
    cy.mount(
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>,
    );
  });
});
