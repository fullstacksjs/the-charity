import { messages } from '@camp/messages';
import { noop } from '@fullstacksjs/toolbox';

import { CreateHouseholdForm } from './CreateHouseholdForm';
import { createHouseholdFormIds } from './CreateHouseholdForm.ids';

const requiredFieldMsg = messages.validation.required;
const minLengthMsg = messages.households.validation.minLength;

describe('Create Household Form', () => {
  beforeEach(() => {
    cy.mount(<CreateHouseholdForm dismiss={noop} />);
  });

  it('should contains text input to enter household name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .should('match', 'input');
    });
  });

  it('should contains submit button to create household', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should not show a required error message when household name is not empty', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .type('مرادی');
      cy.root().submit();
      cy.findByText(`/${requiredFieldMsg}/`).should('not.exist');
    });
  });

  it('should show a required error message when household name is empty', () => {
    cy.get('form').within(() => {
      cy.root().submit();
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .findByRole('alert')
        .should('have.text', requiredFieldMsg);
    });
  });

  it('should show an error message when household name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput).find('input').type('م');
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .findByRole('alert')
        .should('have.text', minLengthMsg);
    });
  });

  it('should not show an error message when household name is more than or equal min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .type('مرادی');
      cy.findByText(`/${minLengthMsg}/`).should('not.exist');
    });
  });

  it('should submit when all required fields fill correctly', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .type('مرادی');
      cy.findByText(`/${minLengthMsg}/`).should('not.exist');
      cy.root().submit();
    });
  });
});
