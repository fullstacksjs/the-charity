import { DashboardLayout } from './DashboardLayout';

describe('AppShell', () => {
  it('should work', () => {
    cy.mount(<DashboardLayout />);
    cy.viewport(1280, 720);
  });
});
