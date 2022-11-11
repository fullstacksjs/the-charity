const loginRoute: AppRoute = '/auth/login';
const projectsRoute: AppRoute = '/dashboard/projects';

describe('Authorization', () => {
  it('should not be able to go to login after logging in', () => {
    cy.login();
    cy.visit(projectsRoute);
    cy.visit(loginRoute);
    cy.location('pathname').should('not.eq', loginRoute);
  });

  it('should be redirected to login if not authenticated', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', loginRoute);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit(projectsRoute);
    cy.location('pathname').should('eq', projectsRoute);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit(projectsRoute);
    cy.location('pathname').should('eq', projectsRoute);
  });
});
