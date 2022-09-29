import { NavList } from './NavList';

describe('NavList', () => {
  it('Color should change when clicked', () => {
    cy.mount(<NavList />);
    cy.get('[href="/families"]').click();
    cy.get('[href="/projects"]').click();
  });
});
