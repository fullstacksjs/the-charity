import { FamilyActionButton } from './FamilyActionButton';

const menuId = 'menu-id';
const menuButtonId = 'button-id';

describe('FamilyActionButton', () => {
  beforeEach(() => {
    cy.mount(
      <FamilyActionButton to="/" menuButtonId={menuButtonId} menuId={menuId} />,
    );
  });

  describe('Action Buttons', () => {
    it('should open their menu on first click', () => {
      cy.findAllByTestId(menuButtonId).click();
      cy.findByTestId(menuId).should('be.visible');
    });

    it('should close their menu on second click', () => {
      cy.findAllByTestId(menuButtonId).click().click();
      cy.findByTestId(menuId).should('be.hidden');
    });
  });
});
