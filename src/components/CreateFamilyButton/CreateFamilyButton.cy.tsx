import { CreateFamilyButton } from './CreateFamilyButton';

describe('CreateFamilyButton', () => {
  beforeEach(() => {
    cy.mount(<CreateFamilyButton />);
  });

  it('should change the url to /create-draft-family after click', () => {
    cy.get('button').click();
    cy.location('pathname').should('eq', '/create-draft-family');
  });
});
