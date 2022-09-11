import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '../apollo/apolloClient';
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
