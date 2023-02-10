import { createFamilyButtonId } from '../../app/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../app/components/CreateFamily/FamilyForm/CreateFamilyForm.ids';
import { createFamilyModalId } from '../../app/components/CreateFamily/FamilyForm/CreateFamilyModal.ids';
import { dashboardHeaderId } from '../../libs/design/Header/DashboardHeader.ids';
import { navLinkIds } from '../../libs/design/Sidebar/Sidebar.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';

const createFamily = (name: string) => {
  cy.visit(AppRoute.families);
  cy.findByTestId(dashboardHeaderId).findByTestId(createFamilyButtonId).click();
  cy.findByTestId(createFamilyFormIds.form).within(() => {
    cy.findByTestId(createFamilyFormIds.nameInput).find('input').type(name);
    cy.findByTestId(createFamilyFormIds.submitBtn).click();
  });
  cy.findByTestId(createFamilyFormIds.notification.success, {
    timeout: 1e4,
  }).should('exist');
};

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
    createFamily(familyFixture.name());
    cy.findByTestId(createFamilyModalId, { timeout: 1e4 }).should('not.exist');
  });

  it('should show result after success', () => {
    createFamily(familyFixture.name());
    cy.findByTestId(createFamilyFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });
});
