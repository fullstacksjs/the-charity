import { CreateProjectButton } from './CreateProjectButton';
import { createProjectButtonId } from './CreateProjectButton.ids';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectButton />);
  });

  it('should be visible to users', () => {
    cy.findByTestId(createProjectButtonId).should('exist');
  });
});
