import {
  CreateProjectButton,
  createProjectButtonId,
} from './CreateProjectButton';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectButton />);
  });

  it('should be visible to users', () => {
    cy.get(createProjectButtonId).should('exist');
  });
});
