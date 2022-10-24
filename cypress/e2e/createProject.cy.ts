import {
  createProjectFormIDs,
  createProjectID,
  createProjectModalID,
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
      cy.findByTestId(createProjectFormIDs.nameInput).type('نام');
      cy.findByTestId(createProjectFormIDs.notification.success).type(
        'توضیح کوتاه',
      );
      cy.findByTestId(createProjectFormIDs.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIDs.notification.success).should('exist');
  });
});
