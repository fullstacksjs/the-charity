import React from 'react';

import { App } from '../../src/App';

describe('<App>', () => {
  it('playground', () => {
    cy.mount(<App />);
  });
});