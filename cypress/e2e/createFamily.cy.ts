import {
  createFamilyButtonID,
  createFamilyFormIDs,
  createFamilyModalID,
} from '../../src/components';

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

    it.skip('should not contain createFamily modal after submitting the valid form ', () => {
      cy.findByTestId(createFamilyButtonID).click();

      cy.findByTestId(createFamilyFormIDs.form).within(() => {
        cy.findByTestId(createFamilyFormIDs.nameInput).type('مرادی');
        cy.root().submit();
      });

      cy.findByTestId(createFamilyModalID).should('not.exist');
    });

    it.skip('should show mutation result notification', () => {
      cy.findByTestId(createFamilyButtonID).click();

      cy.findByTestId(createFamilyFormIDs.form).within(() => {
        cy.findByTestId(createFamilyFormIDs.nameInput).type('مرادی');
        cy.root().submit();
      });

      cy.findByTestId(createFamilyFormIDs.notification.success).should('exist');
    });
  });
});
