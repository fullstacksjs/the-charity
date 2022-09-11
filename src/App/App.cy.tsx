import { ApolloProvider } from '@apollo/client';

import { client } from '../apollo/client';
import { App } from './App';

describe('<App>', () => {
  it('smoke', () => {
    cy.mount(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    );
  });
});
