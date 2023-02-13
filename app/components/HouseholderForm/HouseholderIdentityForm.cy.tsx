import { messages } from '@camp/messages';

import { HouseholderIdentityForm } from './HouseholderIdentityForm';
import { householderIdentityFormIds } from './HouseholderIdentityForm.ids';

const householderIdentityForm = messages.householder.householderIdentityForm;

describe('HouseHolder Identity Form', () => {
  beforeEach(() => {
    cy.mount(<HouseholderIdentityForm />);
  });

  it('contains a first name input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(`${householderIdentityForm.nameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a last name input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.lastNameInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a father name input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.fatherNameInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a nationality input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.nationalityInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a nationality id input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.nationalIdInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a ssn input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(`${householderIdentityForm.ssnInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a issuedAt input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.issuedAtInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a religion input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.religionInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a gender input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.genderInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a dateOfBirth input with correct label', () => {
    cy.contains(householderIdentityForm.dateOfBirthInput.label);
  });

  it('contains a cityOfBirth input with correct label', () => {
    cy.get('form').within(() => {
      cy.findByLabelText(
        `${householderIdentityForm.cityOfBirthInput.label}:`,
      ).should('match', 'input');
    });
  });

  it('contains a button to submit the form', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should show an error message when householder first name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.firstNameInput)
        .find('input')
        .type('م');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder first name is more than or equal to min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.firstNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder last name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.lastNameInput)
        .find('input')
        .type('ع');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder last name is more than or equal to min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.lastNameInput)
        .find('input')
        .type('علیان');
      cy.findByText(householderIdentityForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder father name is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.fatherNameInput)
        .find('input')
        .type('م');
      cy.findByText(
        householderIdentityForm.validation.fatherNameMinLength,
      ).should('exist');
    });
  });

  it('should not show an error message when householder father name is more than or equal to min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.fatherNameInput)
        .find('input')
        .type('محمد');
      cy.findByText(
        householderIdentityForm.validation.fatherNameMinLength,
      ).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('1234');
      cy.findByText(
        householderIdentityForm.validation.nationalIdMinLength,
      ).should('exist');
    });
  });

  it('should not show an error message when householder nationality id is more than or equal to min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(
        householderIdentityForm.validation.nationalIdMinLength,
      ).should('not.exist');
    });
  });

  it('should show an error message when householder nationality id includes word', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('123456789ABC');
      cy.findByText(
        householderIdentityForm.validation.invalidNationalId,
      ).should('exist');
    });
  });

  it('should not show an error message when householder nationality id includes number', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(
        householderIdentityForm.validation.invalidNationalId,
      ).should('not.exist');
    });
  });

  it('should show an error message when householder ssn is less than min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.ssnInput)
        .find('input')
        .type('1234');
      cy.findByText(householderIdentityForm.validation.ssnMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder ssn is more than or equal to min length', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.ssnInput)
        .find('input')
        .type('12345678');
      cy.findByText(householderIdentityForm.validation.ssnMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when householder ssn includes word', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.ssnInput)
        .find('input')
        .type('12345678ABC');
      cy.findByText(householderIdentityForm.validation.invalidSsn).should(
        'exist',
      );
    });
  });

  it('should not show an error message when householder ssn includes ', () => {
    cy.get('form').within(() => {
      cy.findByTestId(householderIdentityFormIds.ssnInput)
        .find('input')
        .type('12345678');
      cy.findByText(householderIdentityForm.validation.invalidSsn).should(
        'not.exist',
      );
    });
  });
});
