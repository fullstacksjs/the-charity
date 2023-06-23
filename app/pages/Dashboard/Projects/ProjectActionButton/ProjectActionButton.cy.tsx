import { ProjectActionButton } from './ProjectActionButton';

const menuId = 'menu-id';
const menuButtonId = 'button-id';

describe('ProjectActionButton', () => {
  beforeEach(() => {
    cy.mount(
      <ProjectActionButton
        to="/"
        menuButtonId={menuButtonId}
        menuId={menuId}
      />,
    );
  });

  describe('Action Buttons', () => {
    it('should open their menu on first click', () => {
      cy.findAllByTestId(menuButtonId).click();
      cy.findByTestId(menuId).should('be.visible');
    });

    it('should close their menu on second click', () => {
      cy.findAllByTestId(menuButtonId).click();
      cy.findAllByTestId(menuButtonId).click();
      cy.findByTestId(menuId).should('be.hidden');
    });
  });
});
