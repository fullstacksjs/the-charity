import { createHouseholdButtonId } from '../../../app/components/CreateHousehold/CreateHouseholdButton/CreateHouseholdButton.ids';
import { createHouseholdFormIds } from '../../../app/components/CreateHousehold/CreateHouseholdForm/CreateHouseholdForm.ids';
import { dashboardHeaderId } from '../../../libs/design/Header/DashboardHeader.ids';
import { AppRoute } from '../../../libs/router/index';

Cypress.Commands.add('createHousehold', name => {
  cy.visit(AppRoute.families);
  cy.findByTestId(dashboardHeaderId)
    .findByTestId(createHouseholdButtonId)
    .click();
  cy.findByTestId(createHouseholdFormIds.form).within(() => {
    cy.findByTestId(createHouseholdFormIds.nameInput).find('input').type(name);
    cy.findByTestId(createHouseholdFormIds.submitBtn).click();
  });
  cy.findByTestId(createHouseholdFormIds.notification.success, {
    timeout: 1e4,
  }).should('exist');
});

declare global {
  namespace Cypress {
    interface Chainable {
      createHousehold: (name: string) => void;
    }
  }
}
