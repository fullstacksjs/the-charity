import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('should work', () => {
    cy.mount(<AppShell content="" />);
    cy.viewport(1280, 720);
  });
});
