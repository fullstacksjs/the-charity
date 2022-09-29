describe('Create Project Button', () => {
  it('Finds the Create Project Button in projects page', () => {
    cy.visit('/projects');
    cy.get('[data-test-id="create-project"]').should('exist');
  });
});
