import { AppRoute } from '../../src/AppRoutes';
import { familyListFailureNotification } from '../../src/components/FamilyList/FamilyList.ids';
import { navLinkIds } from '../../src/components/organisms/Sidebar/Sidebar.ids';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';

describe('Family List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    cy.findByTestId(navLinkIds.families).click();
  });

  it('should be clear of any unexpected errors', () => {
    cy.findByTestId(familyListFailureNotification, { timeout: 50000 }).should(
      'not.exist',
    );
  });

  it.only('newly added family should be visible in familyTable', () => {
    const familyName = familyFixture.name();
    cy.createFamily(familyName);
    cy.waitForReq();
    cy.findByText(familyName).should('exist');
  });
});
