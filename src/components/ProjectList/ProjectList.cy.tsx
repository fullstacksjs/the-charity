import { createProjectButtonId } from '../CreateProject/ProjectButton/CreateProjectButton.ids';
import { createProjectModalId } from '../CreateProject/ProjectForm/CreateProjectModal.ids';
import { ProjectList } from './ProjectList';

describe('Project List', () => {
  beforeEach(() => {
    cy.mount(<ProjectList />);
  });

  it('should close their menu on second click', () => {
    cy.findByTestId(createProjectButtonId).click();
    cy.findByTestId(createProjectModalId).should('exist');
  });
});
