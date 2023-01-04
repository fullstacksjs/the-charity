import { AppRoute } from '../../src/AppRoutes';
import { createProjectButtonId } from '../../src/components/CreateProject/ProjectButton/CreateProjectButton.ids';
import { createProjectFormIds } from '../../src/components/CreateProject/ProjectForm/CreateProjectForm.ids';
import { dashboardHeaderId } from '../../src/components/organisms/Header/DashboardHeader.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { admin } from '../fixtures/admin';
import { projectFixture } from '../fixtures/family';

describe('Project List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.projects);
    cy.findByTestId(navLinkIds.projects).click();
  });

  it('should add a project to the project list when create a project', () => {
    const name = projectFixture.name();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createProjectButtonId)
      .click();

    cy.findByTestId(createProjectFormIds.nameInput).type(name);

    cy.findByTestId(createProjectFormIds.descriptionInput).type(
      projectFixture.description(),
    );

    cy.findByTestId(createProjectFormIds.submitBtn).click();

    cy.findByTestId(createProjectFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');

    cy.visit(AppRoute.projects);

    cy.findByText(name).should('exist');
  });
});
