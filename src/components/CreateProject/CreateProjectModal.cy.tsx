/// <reference types="cypress" />
import { CreateProjectModal } from './CreateProjectModal';

describe('Create Project Form', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectModal opened onClose={() => undefined} />);
  });

  it('contains a text input with label for project name', () => {
    cy.get('form')
      .findByLabelText(/نام پروژه/)
      .type('خرید مدرسه');
  });

  it('contains a text area with label for project description', () => {
    cy.get('form')
      .findByLabelText(/توضیحات/)
      .type('توضیح');
  });

  it('contains a submit button', () => {
    cy.get('form')
      .findByRole('button', { name: /ایجاد پروژه/ })
      .should('have.attr', 'type')
      .and('equal', 'submit');
  });

  it('should show a required error message when Project name is empty', () => {
    cy.get('form').within(() => {
      cy.findByRole('button', { name: /ایجاد پروژه/ }).click();
      cy.findByRole('alert').should('have.text', 'این فیلد ضروری است');
    });
  });

  it('should not show a required error message when Project name is not empty', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(/نام پروژه/).type('نام');
      cy.findByRole('button', { name: /ایجاد پروژه/ }).click();
      cy.findByText('/این فیلد ضروری است/').should('not.exist');
    });
  });

  it('should show an error message when Project name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(/نام پروژه/).type('ن');
      cy.findByRole('alert').should(
        'have.text',
        'نام پروژه باید حداقل ۳ حرف باشد',
      );
    });
  });

  it('should not show an error message when Project name is more than or equal min length', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(/نام پروژه/i).type('نام');
      cy.findByText('/نام پروژه باید حداقل ۳ حرف باشد/').should('not.exist');
    });
  });

  it('contains a disabled submit button on form error', () => {
    cy.get('form').within(() => {
      cy.findByRole('button', { name: /ایجاد پروژه/ }).click();
      cy.findByRole('button', { name: /ایجاد پروژه/ }).should('be.disabled');
    });
  });
});

// contains a submit button
// should show an error  (required and min)
// should be closed after pressing cancel button
