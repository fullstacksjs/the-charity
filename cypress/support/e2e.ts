import './commands';

import { AppRoute } from '../../src/AppRoutes';
import { buildUrl } from '../../src/router/buildUrl';

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    cy.visit(AppRoute.login);
    cy.get('button').click();

    cy.intercept('POST', ' https://dev-jxuskaag.us.auth0.com/oauth/token').as(
      'token',
    );

    cy.origin(
      'https://dev-jxuskaag.us.auth0.com/',
      { args: { email: 'admin@gmail.com', password: '123456789' } } as const,
      ({ email, password }) => {
        cy.get('#username').type(email);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').click();
      },
    );
    cy.wait('@token').then(() => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
    });
  }).then(() => {
    cy.visit('/');
  });
});

Cypress.Commands.overwrite('visit', (visit, url, options) => {
  if (options?.params == null) return visit(url, options);
  const { params, ...restOfOptions } = options;
  return visit(buildUrl(url, params) as AppRoute, restOfOptions);
});
