const loginRoute: AppRoute = '/auth/login';
const familiesRoute: AppRoute = '/dashboard/families';
const projectsRoute: AppRoute = '/dashboard/projects';

describe('Authorization', () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it('should be redirected to login if not authenticated', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', loginRoute);
  });

  it('should be redirected to the families page after successful login', () => {
    cy.login();
    cy.location('pathname').should('eq', familiesRoute);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit(projectsRoute);
    cy.location('pathname').should('eq', projectsRoute);
  });

  it('should not be able to go to login after logging in', () => {
    cy.login();
    cy.visit(loginRoute);
    cy.location('pathname').should('not.eq', loginRoute);
  });
});
