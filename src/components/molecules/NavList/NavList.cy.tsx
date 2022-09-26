import { NavList } from './NavList';

describe('NavList', () => {
  it('Color should change when clicked', () => {
    cy.mount(<NavList />);
    cy.get('button').contains('خانواده ها').click();
    cy.get('button').contains('پروژه ها').click();
  });
});
