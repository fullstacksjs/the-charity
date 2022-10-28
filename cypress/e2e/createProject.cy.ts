import {
  createProjectButtonId,
  createProjectFormIds,
  createProjectModalId,
} from '../../src/components';

const createProjectNavSelector = 'a[href="/projects"]';

describe('Create Project', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(createProjectNavSelector).click();
  });

  it('Finds the create project button in projects page', () => {
    cy.findByTestId(createProjectButtonId).should('exist');
  });

  it('Finds the modal after clicking on the create project button', () => {
    cy.findByTestId(createProjectButtonId).click();
    cy.findByTestId(createProjectModalId).should('exist');
  });

  it.skip('Sees the successful notification when submits the form correctly', () => {
    cy.findByTestId(createProjectButtonId).click();
    cy.findByTestId('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type('نام');
      cy.findByTestId(createProjectFormIds.notification.success).type(
        'توضیح کوتاه',
      );
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success).should('exist');
  });
});
