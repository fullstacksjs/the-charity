import { messages } from '@camp/messages';
import { noop } from '@fullstacksjs/toolbox';

import {
  projectDescriptionID,
  projectNameID,
  submitButtonID,
} from './CreateProjectForm';
import { CreateProjectModal } from './CreateProjectModal';

const requiredFieldMessage = messages.projects.validation.required;
const minLengthMessage = messages.projects.validation.minLength;

describe('Create Project Form', () => {
  beforeEach(() => {
    cy.mount(<CreateProjectModal opened onClose={noop} />);
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

  it('should show a required error message when Project name is empty', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.findByRole('alert').should('have.text', requiredFieldMessage);
    });
  });

  it('should not show a required error message when Project name is not empty', () => {
    cy.get('form').within(() => {
      cy.get(projectNameID).type('نام');
      cy.findByText(`/${requiredFieldMessage}/`).should('not.exist');
    });
  });

  it('should show an error message when Project name is less than min length', () => {
    cy.get('form').within(() => {
      cy.get(projectNameID).type('ن');
      cy.findByRole('alert').should('have.text', minLengthMessage);
    });
  });

  it('should not show an error message when Project name is more than or equal min length', () => {
    cy.get('form').within(() => {
      cy.get(projectNameID).type('نام');
      cy.findByText(`/${minLengthMessage}/`).should('not.exist');
    });
  });

  it('should have a disabled submit button when form has an error', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.get(submitButtonID).should('be.disabled');
    });
  });

  it('should not have a disabled submit button when form is valid', () => {
    cy.get('form').within(() => {
      cy.get(projectNameID).type('نام');
      cy.get(projectDescriptionID).type('توضیح کوتاه');
      cy.get(submitButtonID).should('not.be.disabled');
    });
  });
});
