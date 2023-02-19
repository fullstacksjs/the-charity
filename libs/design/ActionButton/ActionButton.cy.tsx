import { ActionButton } from './ActionButton';

const menuId = 'menu-id';
const menuButtonId = 'button-id';

describe('ActionButton', () => {
  beforeEach(() => {
    cy.mount(
      <ActionButton to="/" menuButtonId={menuButtonId} menuId={menuId} />,
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
