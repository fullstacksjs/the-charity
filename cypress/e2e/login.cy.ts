import { AppRoute } from '../../src/Routes';

const userNameInputSelector = '[type="email"]';
const passwordInputSelector = '[type="password"]';

describe('Login', () => {
  it('should be redirected to the families page after successful login', () => {
    cy.visit(AppRoute.login);
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('admin@gmail.com');
      cy.get(passwordInputSelector).type('123456789');
      cy.root().submit();
    });
    cy.location('pathname').should('eq', AppRoute.families);
  });
});
