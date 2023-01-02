import { messages } from '@camp/messages';
import { noop } from '@fullstacksjs/toolbox';

import { CreateFamilyForm } from './CreateFamilyForm';
import { createFamilyFormIds } from './CreateFamilyForm.ids';

const { minLength: minLengthMessage, required: requiredFieldMessage } =
  messages.families.validation;

describe('Create Family Form', () => {
  beforeEach(() => {
    cy.mount(<CreateFamilyForm dismiss={noop} />);
  });

  it('should contains text input to enter family name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).should('match', 'input');
    });
  });

  it('should contains submit button to create family', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should not show a required error message when family name is not empty', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type('مرادی');
      cy.root().submit();
      cy.findByText(`/${requiredFieldMessage}/`).should('not.exist');
    });
  });

  it('should show a required error message when family name is empty', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.findByRole('alert').should('have.text', requiredFieldMessage);
    });
  });

  it('should show an error message when family name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type('م');
      cy.findByRole('alert').should('have.text', minLengthMessage);
    });
  });

  it('should not show an error message when family name is more than or equal min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type('مرادی');
      cy.findByText(`/${minLengthMessage}/`).should('not.exist');
    });
  });

  it('should submit when all required fields fill correctly', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type('مرادی');
      cy.findByText(`/${minLengthMessage}/`).should('not.exist');
      cy.root().submit();
    });
  });
});
