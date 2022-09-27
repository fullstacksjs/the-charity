describe('Create Project Button', () => {
  it('finds the Create Project Button', () => {
    cy.visit('/');
    cy.get('[data-test-id="create-project"]');
  });
});
