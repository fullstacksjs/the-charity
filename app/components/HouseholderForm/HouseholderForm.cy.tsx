import { messages } from '@camp/messages';

import { HouseholderForm } from './HouseholderForm';
import { householderFormIds } from './HouseholderForm.ids';

const householderForm = messages.householder.form;

describe('HouseHolder Identity Form', () => {
  beforeEach(() => {
    cy.mount(<HouseholderForm familyId="null" />);
  });

  it('contains a first name input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.nameInput.label}:`).should(
        'match',
        'input',
      );
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

  it('contains a nationality input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.nationalityInput.label}:`).should(
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

  it('contains a issuedAt input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.issuedAtInput.label}:`).should(
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

  it('contains a dateOfBirth input with correct label', () => {
    cy.contains(householderForm.dateOfBirthInput.label);
  });

  it('contains a cityOfBirth input with correct label', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByLabelText(`${householderForm.cityOfBirthInput.label}:`).should(
        'match',
        'input',
      );
    });
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
      cy.findByText(householderForm.validation.nameMinLength).should('exist');
    });
  });

  it('should not show an error message when householder first name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.firstNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(householderForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder last name is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.lastNameInput).find('input').type('ع');
      cy.findByText(householderForm.validation.nameMinLength).should('exist');
    });
  });

  it('should not show an error message when householder last name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.lastNameInput)
        .find('input')
        .type('علیان');
      cy.findByText(householderForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder father name is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.fatherNameInput)
        .find('input')
        .type('م');
      cy.findByText(householderForm.validation.fatherNameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder father name is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.fatherNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(householderForm.validation.fatherNameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder nationality id is less than min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('1234');
      cy.findByText(householderForm.validation.nationalIdMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder nationality id is more than or equal to min length', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(householderForm.validation.nationalIdMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder nationality id includes word', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('123456789ABC');
      cy.findByText(householderForm.validation.invalidNationalId).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder nationality id includes number', () => {
    cy.findByTestId(householderFormIds.form).within(() => {
      cy.findByTestId(householderFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(householderForm.validation.invalidNationalId).should(
        'not.exist',
      );
    });
  });
});
