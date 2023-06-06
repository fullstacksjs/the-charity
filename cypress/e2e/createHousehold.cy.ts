import { createHouseholdButtonId } from '../../app/components/CreateHousehold/CreateHouseholdButton/CreateHouseholdButton.ids';
import { createHouseholdFormIds } from '../../app/components/CreateHousehold/CreateHouseholdForm/CreateHouseholdForm.ids';
import { dashboardHeaderId } from '../../libs/design/Header/DashboardHeader.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';

describe('Create Household', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.households);
  });

  it('[OK]: Create a household', () => {
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createHouseholdButtonId)
      .click();
    cy.findByTestId(createHouseholdFormIds.form).within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .type(householdFixture.name());
      cy.findByTestId(createHouseholdFormIds.submitBtn).click();
    });
    cy.findByTestId(createHouseholdFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });
});
