import './commands';

const userNameInputSelector = '[type="email"]';
const passwordInputSelector = '[type="password"]';

Cypress.Commands.add('login', () => {
  // cy.session('login', () => {
  cy.clearCookies();
  cy.visit('/auth/login' as AppRoute);
  cy.get('form').within(() => {
    cy.get(userNameInputSelector).type('admin@gmail.com');
    cy.get(passwordInputSelector).type('123456789');
    cy.root().submit();
  });
  // });
  cy.location('pathname').should('not.equal', '/auth/login' as AppRoute);
});
