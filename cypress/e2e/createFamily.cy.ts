describe('create family', () => {
  it('user should see create draft family button', () => {
    cy.visit('/');
    cy.get('#create-draft-family').should('exist');
  });
});
