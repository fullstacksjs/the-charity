import { createHouseholdButtonId } from '../../app/Dashboard/Households/_components/CreateHousehold/CreateHouseholdButton/CreateHouseholdButton.ids';
import { createHouseholdFormIds } from '../../app/Dashboard/Households/_components/CreateHousehold/CreateHouseholdForm/CreateHouseholdForm.ids';
import { dashboardHeaderId } from '../../libs/design/DashboardHeader/DashboardHeader.ids';
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
    cy.findNotification('success').should('exist');
  });
});
