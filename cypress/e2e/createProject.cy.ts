import { dashboardSidebarIds } from '../../app/Dashboard/_components/DashboardSidebar/DashboardSidebar.ids';
import { createProjectButtonId } from '../../app/Dashboard/Projects/CreateProject/CreateProjectButton/CreateProjectButton.ids';
import { createProjectFormIds } from '../../app/Dashboard/Projects/CreateProject/CreateProjectForm/CreateProjectForm.ids';
import { dashboardHeaderId } from '../../libs/design/DashboardHeader/DashboardHeader.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { projectFixture } from '../fixtures/project';

describe('Create Project', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.projects);
    cy.findByTestId(dashboardSidebarIds.projects).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createProjectButtonId)
      .click();
  });

  it('[OK]: Admin creates project', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput)
        .find('input')
        .type(projectFixture.name());
      cy.findByTestId(createProjectFormIds.descriptionInput).type(
        projectFixture.description(),
      );
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findNotification('success').should('exist');
  });

  it('[NOK]: Admin wants to create a project with short name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).find('input').type('ab');
      cy.findByTestId(createProjectFormIds.submitBtn).should('be.disabled');
    });
  });
});
