const createFamilyButtonID = 'create-family-button';
const createFamilyModalID = 'create-family-modal';
const createFamilyFormID = 'create-family-form';
const familyNameID = 'family-name';
// const createFamilySuccessNotificationID = 'create-family-success-notification';
// const createFamilyFailureNotificationID = 'create-family-failure-notification';

describe('To Create Draft Family', () => {
  beforeEach(() => {
    cy.visit('/families');
  });

  describe('Families Page', () => {
    it('should have a createFamily button', () => {
      cy.findByTestId(createFamilyButtonID).should('exist');
    });

    it('should show createFamily modal after clicking on createFamily button', () => {
      cy.findByTestId(createFamilyButtonID).click();
      cy.findByTestId(createFamilyModalID).should('exist');
    });

    it('should not contain createFamily modal after submitting the valid form ', () => {
      cy.findByTestId(createFamilyButtonID).click();

      cy.findByTestId(createFamilyFormID).within(() => {
        cy.findByTestId(familyNameID).type('مرادی');
        cy.root().submit();
      });

      cy.findByTestId(createFamilyModalID).should('not.exist');
    });

    // it('should show mutation result notification', () => {
    //   cy.findByTestId(createFamilyButtonID).click();

    //   cy.findByTestId(createFamilyFormID).within(() => {
    //     cy.findByTestId(familyNameID).type('مرادی');
    //     cy.root().submit();
    //   });

    //   cy.findByTestId(createFamilySuccessNotificationID).should('exist');
    // });
  });
});
