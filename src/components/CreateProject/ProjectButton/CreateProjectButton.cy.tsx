import { CreateProjectButton, createProjectID } from './CreateProjectButton';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectButton />);
  });

  it('should be visible to users', () => {
    cy.get(createProjectID).should('exist');
  });
});
