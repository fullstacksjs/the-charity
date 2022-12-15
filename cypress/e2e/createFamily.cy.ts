import { AppRoute } from '../../src/AppRoutes';
import { createFamilyButtonId } from '../../src/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../src/components/CreateFamily/FamilyForm/CreateFamilyForm.ids';
import { createFamilyModalId } from '../../src/components/CreateFamily/FamilyForm/CreateFamilyModal.ids';
import { dashboardHeaderId } from '../../src/components/organisms/Header/DashboardHeader.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';

describe('Create Family', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    cy.findByTestId(navLinkIds.families).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createFamilyButtonId)
      .click();
  });

  it('should open modal', () => {
    cy.findByTestId(createFamilyModalId).should('exist');
  });

  it('should close modal after success', () => {
    cy.findByTestId(createFamilyFormIds.form).within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput)
        .type(familyFixture.name())
        .then(() => {
          cy.root().submit();
        });
    });

    cy.findByTestId(createFamilyModalId, { timeout: 1e4 }).should('not.exist');
  });

  it('should show result after success', () => {
    cy.findByTestId(createFamilyFormIds.form).within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput).type(familyFixture.name());
      cy.findByTestId(createFamilyFormIds.submitBtn).click();
    });

    cy.findByTestId(createFamilyFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });
});
