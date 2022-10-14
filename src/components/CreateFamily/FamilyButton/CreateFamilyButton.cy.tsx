import { CreateFamilyButton } from './CreateFamilyButton';

describe('Create Family Button', () => {
  beforeEach(() => {
    cy.mount(<CreateFamilyButton />);
  });

  it('should be visible to users', () => {
    cy.get('#create-draft-family').should('exist');
  });
});
