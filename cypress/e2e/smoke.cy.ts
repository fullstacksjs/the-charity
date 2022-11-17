import { AppRoute } from '../../src/Routes';

describe('e2e smoke test', () => {
  it('should visit', () => {
    cy.visit(AppRoute.index);
  });
});
