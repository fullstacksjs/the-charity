import './commands';

import { buildUrl } from '../../src/router/buildUrl';
import { AppRoute } from '../../src/Routes';

const userNameInputSelector = '[type="email"]';
const passwordInputSelector = '[type="password"]';

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    cy.visit(AppRoute.login);
    cy.get('form').within(() => {
      cy.intercept('POST', '/graphql').as('login');
      cy.get(userNameInputSelector).type('admin@gmail.com');
      cy.get(passwordInputSelector).type('123456789');
      cy.root().submit();
      cy.wait('@login');
    });
  });
  cy.visit(AppRoute.dashboard);
});

Cypress.Commands.overwrite('visit', (visit, url, options) => {
  if (options?.params == null) return visit(url, options);
  const { params, ...restOfOptions } = options;
  return visit(buildUrl(url, params) as AppRoute, restOfOptions);
});
