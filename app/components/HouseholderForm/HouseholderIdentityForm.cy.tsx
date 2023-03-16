import { messages } from '@camp/messages';

import { HouseholderIdentityForm } from './HouseholderIdentityForm';
import { householderIdentityFormIds } from './HouseholderIdentityForm.ids';

const householderIdentityForm = messages.householder.householderIdentityForm;

describe('HouseHolder Identity Form', () => {
  beforeEach(() => {
    cy.mount(<HouseholderIdentityForm familyId="null" />);
  });

  it('contains a first name input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(`${householderIdentityForm.nameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a last name input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.lastNameInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a father name input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.fatherNameInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a nationality input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.nationalityInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a nationality id input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.nationalIdInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a issuedAt input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.issuedAtInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a religion input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.religionInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a gender input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.genderInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a dateOfBirth input with correct label', () => {
    cy.contains(householderIdentityForm.dateOfBirthInput.label);
  });

  it('contains a cityOfBirth input with correct label', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.cityOfBirthInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a button to submit the form', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should show an error message when householder first name is less than min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.firstNameInput)
        .find('input')
        .type('م');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder first name is more than or equal to min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.firstNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder last name is less than min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.lastNameInput)
        .find('input')
        .type('ع');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder last name is more than or equal to min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.lastNameInput)
        .find('input')
        .type('علیان');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder father name is less than min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.fatherNameInput)
        .find('input')
        .type('م');
      cy.findByText(
        householderIdentityForm.validation.fatherNameMinLength,
      ).should('exist');
    });
  });

  it('should not show an error message when householder father name is more than or equal to min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.fatherNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(
        householderIdentityForm.validation.fatherNameMinLength,
      ).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id is less than min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('1234');
      cy.findByText(
        householderIdentityForm.validation.nationalIdMinLength,
      ).should('exist');
    });
  });

  it('should not show an error message when householder nationality id is more than or equal to min length', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(
        householderIdentityForm.validation.nationalIdMinLength,
      ).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id includes word', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('123456789ABC');
      cy.findByText(
        householderIdentityForm.validation.invalidNationalId,
      ).should('exist');
    });
  });

  it('should not show an error message when householder nationality id includes number', () => {
    cy.findByTestId(householderIdentityFormIds.form).within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(
        householderIdentityForm.validation.invalidNationalId,
      ).should('not.exist');
    });
  });
});
