import { messages } from '@camp/messages';

import { LoginForm } from './LoginForm';

const userNameInputSelector = '[type="email"]';
const passwordInputSelector = '[type="password"]';
const submitButtonSelector = '[type="submit"]';
const requiredFieldMessage = messages.login.loginFrom.validation.required;
const emailErrorMsg = messages.login.loginFrom.validation.emailErrorMessage;

describe('Login Form', () => {
  beforeEach(() => {
    cy.mount(<LoginForm />);
    cy.viewport(1280, 720);
  });

  it('should contains username input to enter the correct email', () => {
    cy.get(userNameInputSelector).should('match', 'input');
  });

  it('should contains password input to enter the correct password', () => {
    cy.get(passwordInputSelector).should('match', 'input');
  });

  it('should contains submit button to login the user', () => {
    cy.get(submitButtonSelector).should('match', 'button');
  });

  it('should not show a required error message when username is not empty', () => {
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('you@email.com');
      cy.root().submit();
      cy.findByText(`/${requiredFieldMessage}/`).should('not.exist');
    });
  });

  it('should show a required error message when username is empty', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.findAllByText(requiredFieldMessage).should('exist');
    });
  });

  it('should show an error message when username is not an email', () => {
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('نام کاربری');
      cy.root().submit();
      cy.findByText(emailErrorMsg).should('exist');
    });
  });

  it('should not show an error message when username is an email', () => {
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('you@eamil.com');
      cy.root().submit();
      cy.findByText(emailErrorMsg).should('not.exist');
    });
  });

  it('should not show a required error message when password is not empty', () => {
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('you@email.com');
      cy.get(passwordInputSelector).type('password');
      cy.root().submit();
      cy.findByText(`/${requiredFieldMessage}/`).should('not.exist');
    });
  });

  it('should show a required error message when password is empty', () => {
    cy.get('form').within(() => {
      cy.get(userNameInputSelector).type('you@email.com');
      cy.root().submit();
      cy.findAllByText(requiredFieldMessage).should('exist');
    });
  });
});
