describe('Create Project Button', () => {
  it('Finds the Create Project Button in projects page', () => {
    cy.visit('/');
    cy.get('a[href="/projects"]').click();
    cy.get('#create-project').should('exist');
  });
});
