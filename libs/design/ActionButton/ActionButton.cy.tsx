import { ActionButton } from './ActionButton';

const menuId = 'menu-id';
const menuButtonId = 'button-id';

describe('Table', () => {
  beforeEach(() => {
    cy.mount(
      <ActionButton to="/" menuButtonId={menuButtonId} menuId={menuId} />,
    );
  });

  describe('Action Buttons', () => {
    it('should open their menu on first click', () => {
      const button = cy.findAllByTestId(menuButtonId);
      button.click();
      cy.findByTestId(menuId).should('be.visible');
    });

    it('should close their menu on second click', () => {
      const button = cy.findAllByTestId(menuButtonId);
      button.click().click();
      cy.findByTestId(menuId).should('be.hidden');
    });
  });
});
