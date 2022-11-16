import { createFamilyButtonId, createFamilyModalId } from '../CreateFamily';
import { FamilyList } from './FamilyList';

describe('Family List', () => {
  beforeEach(() => {
    cy.mount(
      <>
        <FamilyList />
      </>,
    );
  });

  it('should close their menu on second click', () => {
    cy.findByTestId(createFamilyButtonId).click();
    cy.findByTestId(createFamilyModalId).should('exist');
  });
});
