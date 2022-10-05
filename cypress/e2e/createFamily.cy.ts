describe('Create Family', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Finds the create family Button in families page', () => {
    cy.get('a[href="/families"]').click();
    cy.get('#create-draft-family').should('exist');
  });
});
