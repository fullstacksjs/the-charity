import { messages } from '@camp/messages';
import { useEffect } from 'react';

import { createProjectFormIds } from '../CreateProjectForm/CreateProjectForm.ids';
import { openCreateProjectModal } from './CreateProjectModal';

const requiredFieldMsg = messages.validation.required;
const minLengthMsg = messages.projects.validation.minLength;

const TestModal = () => {
  useEffect(() => {
    openCreateProjectModal();
  }, []);

  return null;
};

describe('Create Project Form', () => {
  beforeEach(() => {
    cy.mount(<TestModal />);
  });

  it('contains a text input with label for Project name', () => {
    cy.get('form')
      .findByLabelText(messages.projects.createForm.nameInput.label, {
        exact: false,
      })
      .should('match', 'input');
  });

  it('contains a text area with label for Project description', () => {
    cy.get('form')
      .findByLabelText(messages.projects.createForm.descriptionInput.label)
      .should('match', 'textarea');
  });

  it('contains a submit button to create Project', () => {
    cy.get('form')
      .findByRole('button', {
        name: messages.projects.createForm.submitBtn.text,
      })
      .should('have.attr', 'type')
      .and('equal', 'submit');
  });

  it('the submit button should be disabled for invalid form', () => {
    cy.get('form')
      .findByRole('button', {
        name: messages.projects.createForm.submitBtn.text,
      })
      .should('be.disabled');
  });

  it('should not show a required error message when Project name is not empty', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).find('input').type('نام');
      cy.findByText(`/${requiredFieldMsg}/`).should('not.exist');
    });
  });

  it('should show an error message when Project name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).find('input').type('ن');
      cy.findByTestId(createProjectFormIds.nameInput)
        .findByRole('alert')
        .should('have.text', minLengthMsg);
    });
  });

  it('should not show an error message when Project name is more than or equal min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).find('input').type('نام');
      cy.findByText(`/${minLengthMsg}/`).should('not.exist');
    });
  });

  it('should have a disabled submit button when form has an error', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.findByTestId(createProjectFormIds.submitBtn).should('be.disabled');
    });
  });

  it('should not have a disabled submit button when form is valid', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).find('input').type('نام');
      cy.findByTestId(createProjectFormIds.descriptionInput).type(
        'توضیح کوتاه',
      );
      cy.findByTestId(createProjectFormIds.submitBtn).should('not.be.disabled');
    });
  });
});
