describe('create family', () => {
  it('user should see create draft family button', () => {
    cy.visit('/');
    cy.get('a[href="/families"]').click();
    cy.get('#create-draft-family').should('exist');
  });
});
