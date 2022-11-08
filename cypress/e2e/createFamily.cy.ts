import {
  createFamilyButtonId,
  createFamilyFormIds,
  createFamilyModalId,
} from '../../src/components';
import { genFakeFamilyName } from '../../src/utils';

describe('To Create Draft Family', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/families');
  });

  describe.skip('Families Page', () => {
    it('should have a createFamily button', () => {
      cy.findByTestId(createFamilyButtonId).should('exist');
    });

    it('should show createFamily modal after clicking on createFamily button', () => {
      cy.findByTestId(createFamilyButtonId).click();
      cy.findByTestId(createFamilyModalId).should('exist');
    });

    it.skip('should not contain createFamily modal after submitting the valid form ', () => {
      cy.findByTestId(createFamilyButtonId).click();

      cy.findByTestId(createFamilyFormIds.form).within(() => {
        cy.findByTestId(createFamilyFormIds.nameInput)
          .type(genFakeFamilyName())
          .then(() => {
            cy.root().submit();
          });
      });

      cy.findByTestId(createFamilyModalId).should('not.exist');
    });

    it('should show mutation result notification', () => {
      cy.findByTestId(createFamilyButtonId).click();

      cy.findByTestId(createFamilyFormIds.form).within(() => {
        cy.findByTestId(createFamilyFormIds.nameInput).type(
          genFakeFamilyName(),
        );
        cy.findByTestId(createFamilyFormIds.submitBtn).click();
      });

      cy.findByTestId(createFamilyFormIds.notification.success).should('exist');
    });
  });
});
