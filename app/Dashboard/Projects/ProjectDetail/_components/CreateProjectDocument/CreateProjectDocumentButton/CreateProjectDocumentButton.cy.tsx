import { CreateProjectDocumentButton } from './CreateProjectDocumentButton';
import { createProjectDocumentButtonId } from './CreateProjectDocumentButton.ids';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectDocumentButton />);
  });

  it('should be visible to users', () => {
    cy.findByTestId(createProjectDocumentButtonId).should('exist');
  });
});
