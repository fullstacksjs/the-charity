import { AppRoute } from '../../../src/AppRoutes';
import { createFamilyButtonId } from '../../../src/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../../src/components/CreateFamily/FamilyForm/CreateFamilyForm.ids';
import { dashboardHeaderId } from '../../../src/components/organisms/Header/DashboardHeader.ids';

Cypress.Commands.add('createFamily', name => {
  cy.visit(AppRoute.families);
  cy.findByTestId(dashboardHeaderId).findByTestId(createFamilyButtonId).click();
  cy.findByTestId(createFamilyFormIds.form).within(() => {
    cy.findByTestId(createFamilyFormIds.nameInput).type(name);
    cy.findByTestId(createFamilyFormIds.submitBtn).click();
  });
  cy.findByTestId(createFamilyFormIds.notification.success, {
    timeout: 1e4,
  }).should('exist');
});

declare global {
  namespace Cypress {
    interface Chainable {
      createFamily: (name: string) => void;
    }
  }
}
