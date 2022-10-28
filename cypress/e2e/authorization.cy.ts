describe('Authorization', () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it('should be redirected to login if not authenticated', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
  });

  // NOTE this is in scope of FSK-97
  it.skip('should be redirected to the families page after successful login', () => {
    cy.login();
    cy.location('pathname').should('eq', '/families');
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit('/projects');
    cy.location('pathname').should('eq', '/projects');
  });

  it('should not be able to go to login after logging in', () => {
    cy.login();
    cy.visit('/login');
    cy.location('pathname').should('not.eq', '/login');
  });
});
