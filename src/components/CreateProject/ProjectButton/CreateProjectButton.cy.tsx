import { CreateProjectButton } from './CreateProjectButton';

describe('CreateProjectButton', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectButton />);
  });

  it('should change the url to /create-project after click', () => {
    cy.get('button').click();
    cy.location('pathname').should('eq', '/create-project');
  });
});
