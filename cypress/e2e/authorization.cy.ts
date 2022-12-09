import { AppRoute } from '../../src/AppRoutes';

describe('Authorization', () => {
  it('should not be able to go to login after logging in', () => {
    cy.login();

    cy.visit(AppRoute.projects).then(() => {
      cy.visit(AppRoute.login);
      cy.location('pathname').should('not.eq', AppRoute.login);
    });
  });

  it('should be redirected to login if not authenticated', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', AppRoute.login);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit(AppRoute.projects);
    cy.location('pathname').should('eq', AppRoute.projects);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login();
    cy.visit(AppRoute.projects);
    cy.location('pathname').should('eq', AppRoute.projects);
  });
});
