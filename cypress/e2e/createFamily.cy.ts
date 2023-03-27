import { createFamilyButtonId } from '../../app/components/CreateFamily/CreateFamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../app/components/CreateFamily/CreateFamilyForm/CreateFamilyForm.ids';
import { dashboardHeaderId } from '../../libs/design/Header/DashboardHeader.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';

describe('Create Family', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
  });

  it('[OK]: Create a family', () => {
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createFamilyButtonId)
      .click();
    cy.findByTestId(createFamilyFormIds.form).within(() => {
      cy.findByTestId(createFamilyFormIds.nameInput)
        .find('input')
        .type(familyFixture.name());
      cy.findByTestId(createFamilyFormIds.submitBtn).click();
    });
    cy.findByTestId(createFamilyFormIds.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });
});
