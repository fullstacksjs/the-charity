import { messages } from '@camp/messages';

import { MemberForm } from './MemberForm';
import { memberFormIds } from './MemberForm.ids';

const createMemberForm = messages.member.createForm;

describe('Create member form Form', () => {
  beforeEach(() => {
    cy.mount(<MemberForm />);
  });

  it('contains a first name input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.nameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a last name input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.lastNameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a father name input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.fatherNameInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a nationality input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.nationalityInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a religion input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.religionInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a gender input with correct label', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByLabelText(`${createMemberForm.genderInput.label}:`).should(
        'match',
        'input',
      );
    });
  });

  it('contains a dateOfBirth input with correct label', () => {
    cy.contains(createMemberForm.dateOfBirthInput.label);
  });

  it('contains a button to submit the form', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.submitBtn)
        .should('have.attr', 'type')
        .and('equal', 'submit');
    });
  });

  it('should show an error message when member first name is less than min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.firstNameInput).find('input').type('م');
      cy.findByText(createMemberForm.validation.nameMinLength).should('exist');
    });
  });

  it('should not show an error message when member first name is more than or equal to min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.firstNameInput).find('input').type('محمد');
      cy.findByText(createMemberForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when member last name is less than min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.lastNameInput).find('input').type('ع');
      cy.findByText(createMemberForm.validation.nameMinLength).should('exist');
    });
  });

  it('should not show an error message when member last name is more than or equal to min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.lastNameInput).find('input').type('علیان');
      cy.findByText(createMemberForm.validation.nameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when member father name is less than min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.fatherNameInput).find('input').type('م');
      cy.findByText(createMemberForm.validation.fatherNameMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when member father name is more than or equal to min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.fatherNameInput).find('input').type('محمد');
      cy.findByText(createMemberForm.validation.fatherNameMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when member nationality id is less than min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.nationalIdInput).find('input').type('1234');
      cy.findByText(createMemberForm.validation.nationalIdMinLength).should(
        'exist',
      );
    });
  });

  it('should not show an error message when member nationality id is more than or equal to min length', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(createMemberForm.validation.nationalIdMinLength).should(
        'not.exist',
      );
    });
  });

  it('should show an error message when member nationality id includes word', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.nationalIdInput)
        .find('input')
        .type('123456789ABC');
      cy.findByText(createMemberForm.validation.invalidNationalId).should(
        'exist',
      );
    });
  });

  it('should not show an error message when member nationality id includes number', () => {
    cy.findByTestId(memberFormIds.form).within(() => {
      cy.findByTestId(memberFormIds.nationalIdInput)
        .find('input')
        .type('0123456789');
      cy.findByText(createMemberForm.validation.invalidNationalId).should(
        'not.exist',
      );
    });
  });
});
