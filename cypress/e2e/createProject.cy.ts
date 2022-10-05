describe('Create Project', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Finds the create project button in projects page', () => {
    cy.get('a[href="/projects"]').click();
    cy.get('#create-project').should('exist');
  });
});
