import {
  createProjectButtonId,
  createProjectFormIds,
} from '../../src/components';
import { genFakeProjectDescription, genFakeProjectName } from '../../src/utils';

const createProjectNavSelector = 'a[href="/projects"]';

describe.skip('Create Project', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
    cy.get(createProjectNavSelector).click();
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
