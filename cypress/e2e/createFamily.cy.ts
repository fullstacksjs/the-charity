import { createFamilyButtonId } from '../../src/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../src/components/CreateFamily/FamilyForm/CreateFamilyForm.ids';
import { createFamilyModalId } from '../../src/components/CreateFamily/FamilyForm/CreateFamilyModal.ids';
import { dashboardHeaderId } from '../../src/components/organisms/Header/DashboardHeader.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { genFakeFamilyName } from '../../src/utils';

describe('Create Draft Family', () => {
  beforeEach(() => {
    cy.login();
    cy.findByTestId(navLinkIds.families).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createFamilyButtonId)
      .click();
  });

  it('should show createFamily modal after clicking on createFamily button', () => {
    cy.findByTestId(createFamilyModalId).should('exist');
  });

  it('should not contain createFamily modal after submitting the valid form ', () => {
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
    cy.findByTestId(createFamilyFormIds.form).within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type(genFakeFamilyName());
      cy.findByTestId(createFamilyFormIds.submitBtn).click();
    });

    cy.findByTestId(createFamilyFormIds.notification.success).should('exist');
  });
});
