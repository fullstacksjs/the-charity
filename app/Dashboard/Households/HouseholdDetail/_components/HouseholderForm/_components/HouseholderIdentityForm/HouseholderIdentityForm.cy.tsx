import { messages } from '@camp/messages';

import { HouseholderIdentityForm } from './HouseholderIdentityForm';
import { householderFormIds } from './HouseholderIdentityForm.ids';

const householderForm = messages.householder.form;
const validation = messages.validation;

describe('HouseHolder Form', () => {
  beforeEach(() => {
    cy.mount(
      <HouseholderIdentityForm householdName="Household" householdId="null" />,
    );
  });

  it('contains a first name input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByRole('textbox', { name: /نام:/i });
    });
  });

  it('contains a last name input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.lastNameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a father name input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.fatherNameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a nationality id input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.nationalIdInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a religion input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.religionInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a gender input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.genderInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a dob input with correct label', () => {
    cy.contains(householderForm.dobInput.label);
  });

  it('contains a button to submit the form', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should show an error message when householder first name is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.firstNameInput)
        .find('input')
        .type('م');
      cy.findByText(validation.name.minLength).should('exist');
    });
  });

  it('should not show an error message when householder first name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.firstNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(validation.name.minLength).should('not.exist');
    });
  });

  it('should show an error message when householder last name is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.lastNameInput).find('input').type('ع');
      cy.findByText(validation.surname.minLength).should('exist');
    });
  });

  it('should not show an error message when householder last name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.lastNameInput)
        .find('input')
        .type('علیان');
      cy.findByText(validation.surname.minLength).should('not.exist');
    });
  });

  it('should show an error message when householder father name is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.fatherNameInput)
        .find('input')
        .type('م');
      cy.findByText(validation.name.minLength).should('exist');
    });
  });

  it('should not show an error message when householder father name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.fatherNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(validation.name.minLength).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('1234');
      cy.findByText(validation.nationalId.length).should('exist');
    });
  });

  it('should not show an error message when householder nationality id is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(validation.nationalId.length).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id includes word', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('1234567ABC');
      cy.findByText(validation.nationalId.invalid).should('exist');
    });
  });

  it('should not show an error message when householder nationality id includes number', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(validation.nationalId.invalid).should('not.exist');
    });
  });
});
