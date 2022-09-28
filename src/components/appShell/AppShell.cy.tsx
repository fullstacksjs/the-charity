import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('should work', () => {
    cy.mount(<AppShell />);
    cy.viewport(1280, 720);
  });
});
