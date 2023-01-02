import { exitNavLinkId } from '../../app/components/atoms/NavLink/ExitNavLink.ids';
import { logoutModalIds } from '../../app/components/LogoutModal/LogoutModal.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';

describe('logout', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.dashboard);
    cy.findByTestId(exitNavLinkId).click();
  });

  it('should show a confirmation dialog box', () => {
    cy.findByTestId(logoutModalIds.modal).should('exist');
  });

  it('should navigate to the login page after confirm', () => {
    cy.findByTestId(logoutModalIds.acceptBtn).click();
    cy.location('pathname').should('not.eq', AppRoute.dashboard);
  });
});
