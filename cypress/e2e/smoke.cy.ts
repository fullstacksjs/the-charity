import { AppRoute } from '../../libs/router/AppRoutes';

describe('e2e smoke test', () => {
  it('should visit', () => {
    cy.visit(AppRoute.index);
  });
});
