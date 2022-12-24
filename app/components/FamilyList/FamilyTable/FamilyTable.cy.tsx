import { FamilyTable } from './FamilyTable';
import { shortFamiliesInfo } from './FamilyTable.stories';
import { familyTableMenuButtonId, familyTableMenuId } from './FamilyTableRow';

describe('Family Table', () => {
  beforeEach(() => {
    cy.mount(<FamilyTable shortFamiliesInfo={shortFamiliesInfo} />);
  });

  describe('menu Buttons', () => {
    it('should open their menu on first click', () => {
      cy.findAllByTestId(familyTableMenuButtonId).each(el => {
        const menuBtn = cy.wrap(el);
        menuBtn.click({ force: true });
        cy.findByTestId(familyTableMenuId).should('exist');
      });
    });

    it('should close their menu on second click', () => {
      cy.findAllByTestId(familyTableMenuButtonId).each(el => {
        const menuBtn = cy.wrap(el);
        menuBtn.click();
        menuBtn.click();
        cy.findByTestId(familyTableMenuId).should('not.exist');
      });
    });
  });
});
