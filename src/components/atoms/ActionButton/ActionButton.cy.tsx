import {
  ProjectTable,
  projectTableMenuButtonId,
  projectTableMenuId,
} from '../../ProjectList';

describe('Table', () => {
  beforeEach(() => {
    cy.mount(<ProjectTable />);
  });

  describe('Action Buttons', () => {
    it('should open their menu on first click', () => {
      cy.findAllByTestId(projectTableMenuButtonId).each(el => {
        const menuBtn = cy.wrap(el);
        menuBtn.click({ force: true });
        cy.findByTestId(projectTableMenuId).should('exist');
      });
    });

    it('should close their menu on second click', () => {
      cy.findAllByTestId(projectTableMenuButtonId).each(el => {
        const menuBtn = cy.wrap(el);
        menuBtn.click();
        menuBtn.click();
        cy.findByTestId(projectTableMenuId).should('not.exist');
      });
    });
  });
});
