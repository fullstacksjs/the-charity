import { genFakeProjectDescription, genFakeProjectName } from '@camp/utils';

import {
  createProjectButtonId,
  createProjectFormIds,
  navLinkIds,
} from '../../src/components';

describe('Create Project', () => {
  beforeEach(() => {
    cy.login();
    cy.findByTestId(navLinkIds.projects).click();
    cy.findByTestId(createProjectButtonId).click();
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

  it('[NOK]: Admin wants to create a project with short name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type('نام');
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success).should('exist');
  });
});
