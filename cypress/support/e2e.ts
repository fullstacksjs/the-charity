import './commands';

const userNameInputSelector = '[type="email"]';
const passwordInputSelector = '[type="password"]';

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    cy.clearCookies();
    cy.visit('/login');
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('you@email.com');
      cy.get(passwordInputSelector).type('password');
      cy.root().submit();
    });
  });
});
