import { createProjectButtonId } from '../../app/components/CreateProject/ProjectButton/CreateProjectButton.ids';
import { createProjectFormIds } from '../../app/components/CreateProject/ProjectForm/CreateProjectForm.ids';
import { dashboardHeaderId } from '../../libs/design/Header/DashboardHeader.ids';
import { navLinkIds } from '../../libs/design/Sidebar/Sidebar.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { projectFixture } from '../fixtures/family';

describe('Create Project', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.projects);
    cy.findByTestId(navLinkIds.projects).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createProjectButtonId)
      .click();
  });

  it('[OK]: Admin creates project', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type(
        projectFixture.name(),
      );
      cy.findByTestId(createProjectFormIds.descriptionInput).type(
        projectFixture.description(),
      );
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });

  it('[NOK]: Admin wants to create a project with short name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type('ab');
      cy.findByTestId(createProjectFormIds.submitBtn).should('be.disabled');
    });
  });
});
