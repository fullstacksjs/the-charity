import { CreateProjectButton } from './CreateProjectButton';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectButton />);
  });

  it('should be visible to users', () => {
    cy.get('#create-project').should('exist');
  });
});
