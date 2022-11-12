import { exitNavLinkId } from '../../src/components/atoms';
import { logoutModalIds } from '../../src/components/LogoutModal';

const loginRoute: AppRoute = '/auth/login';

describe('logout', () => {
  beforeEach(() => {
    cy.login();
    cy.findByTestId(exitNavLinkId).click();
  });

  it('should show a confirmation dialog box', () => {
    cy.findByTestId(logoutModalIds.modal).should('exist');
  });

  it('should navigate to the login page after confirm', () => {
    cy.findByTestId(logoutModalIds.acceptBtn).click();
    cy.location('pathname').should('eq', loginRoute);
  });
});
