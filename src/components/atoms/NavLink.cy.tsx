import { DashboardIcon } from '../appShell/icons/DashboardIcon';
import { NavLink } from './NavLink';

describe('NavLink', () => {
  it('to render and have right text', () => {
    cy.mount(
      <NavLink
        links={[
          {
            label: 'داشبورد',
            icon: <DashboardIcon w="24" h="24" />,
          },
        ]}
      />,
    );
    cy.get('[data-test-id="nav-link"]').should('have.text', 'داشبورد');
  });
});
