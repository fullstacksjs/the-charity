import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('should work', () => {
    cy.mount(<AppShell children="" />);
    cy.viewport(1280, 720);
  });
});
