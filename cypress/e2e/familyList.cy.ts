import { navLinkIds } from '../../libs/design/Sidebar/Sidebar.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { familyFixture } from '../fixtures/project';
import * as api from './api';

describe('Family List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    cy.findByTestId(navLinkIds.families).click();
  });

  it('newly added family should be visible in familyTable', () => {
    const name = familyFixture.name();
    cy.wrap(api.createFamily(name));
    cy.visit(AppRoute.families);
    cy.findByText(name).should('exist');
  });

  it('clicking on family entry should navigate to id page', () => {
    const name = familyFixture.name();
    cy.wrap(api.createFamily(name)).then((data: { id: string }) => {
      cy.visit(AppRoute.families);
      cy.findByText(name).click();
      cy.location().should(loc => {
        expect(loc.pathname).include(data.id);
      });
    });
  });
});
