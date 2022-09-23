import { App } from './App';

describe('<App>', () => {
  it('should mount', () => {
    cy.mount(<App />);
  });
});
