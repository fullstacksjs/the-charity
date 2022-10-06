const createProjectNavSelector = 'a[href="/projects"]';
const createProjectButtonSelector = '#create-project';
const projectNameSelector = '[data-test="project-name"]';
const submitButtonSelector = '[data-test="submit-button"]';
const projectDescriptionSelector = '[data-test="project-description"]';
const successNotificationSelector = '[data-test="notification-success"]';
const createProjectModalSelector = '[data-test="create-project-modal"]';

describe('Create Project', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Finds the create project button in projects page', () => {
    cy.get(createProjectNavSelector).click();
    cy.get(createProjectButtonSelector).should('exist');
  });

  it('Finds the modal after clicking on the create project button', () => {
    cy.get(createProjectNavSelector).click();
    cy.get(createProjectButtonSelector).click();
    cy.get(createProjectModalSelector).should('exist');
  });

  it('Sees the successful notification when Submits the form correctly', () => {
    cy.get(createProjectNavSelector).click();
    cy.get(createProjectButtonSelector).click();
    cy.get('form').within(() => {
      cy.get(projectNameSelector).type('نام');
      cy.get(projectDescriptionSelector).type('توضیح کوتاه');
      cy.get(submitButtonSelector).click();
    });
    cy.get(successNotificationSelector).should('exist');
  });
});
