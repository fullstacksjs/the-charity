import { createProjectButtonId, createProjectModalId } from '../CreateProject';
import { ProjectList } from './ProjectList';

describe('Project List', () => {
  beforeEach(() => {
    cy.mount(<ProjectList />);
  });
  // This test works but after https://github.com/fullstacksjs/the-charity-frontend/pull/62 got merged
  it.skip('should close their menu on second click', () => {
    cy.findByTestId(createProjectButtonId).click();
    cy.findByTestId(createProjectModalId).should('exist');
  });
});
