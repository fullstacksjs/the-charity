import {
  createProjectID,
  createProjectModalID,
  createProjectNotificationSuccessID,
  projectNameID,
  submitButtonID,
} from '../../src/components';

const createProjectNavSelector = 'a[href="/projects"]';

describe('Create Project', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(createProjectNavSelector).click();
  });

  it('Finds the create project button in projects page', () => {
    cy.findByTestId(createProjectID).should('exist');
  });

  it('Finds the modal after clicking on the create project button', () => {
    cy.findByTestId(createProjectID).click();
    cy.findByTestId(createProjectModalID).should('exist');
  });

  it.skip('Sees the successful notification when submits the form correctly', () => {
    cy.findByTestId(createProjectID).click();
    cy.findByTestId('form').within(() => {
      cy.findByTestId(projectNameID).type('نام');
      cy.findByTestId(createProjectNotificationSuccessID).type('توضیح کوتاه');
      cy.findByTestId(submitButtonID).click();
    });
    cy.findByTestId(createProjectNotificationSuccessID).should('exist');
  });
});
