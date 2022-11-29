import { createProjectButtonId } from '../../src/components/CreateProject/ProjectButton/CreateProjectButton.ids';
import { createProjectFormIds } from '../../src/components/CreateProject/ProjectForm/CreateProjectForm.ids';
import { dashboardHeaderId } from '../../src/components/organisms/Header/DashboardHeader.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { genFakeProjectDescription, genFakeProjectName } from '../../src/utils';

describe('Create Project', () => {
  beforeEach(() => {
    cy.login();
    cy.findByTestId(navLinkIds.projects).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createProjectButtonId)
      .click();
  });

  it('[OK]: Admin creates project', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type(
        genFakeProjectName(),
      );
      cy.findByTestId(createProjectFormIds.descriptionInput).type(
        genFakeProjectDescription(),
      );
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success).should('exist');
  });

  it.skip('[NOK]: Admin wants to create a project with short name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type('ab');
      cy.findByTestId(createProjectFormIds.submitBtn).should('be.disabled');
    });
  });
});
