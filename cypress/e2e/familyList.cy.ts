import { AppRoute } from '../../src/AppRoutes';
import { createFamilyButtonId } from '../../src/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { familyListFailureNotification } from '../../src/components/FamilyList/FamilyList.ids';
import { dashboardHeaderId } from '../../src/components/organisms/Header/DashboardHeader.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';

describe('Family List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    cy.findByTestId(navLinkIds.families).click();
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createFamilyButtonId)
      .click();
  });

  it('should be clear of any unexpected errors', () => {
    cy.findByTestId(familyListFailureNotification).should('not.exist');
  });

  it('newly added family should be visible in familyTable', () => {
    const familyName = familyFixture.name();
    cy.createFamily(familyName);
    cy.visit(AppRoute.families);
  });
});
