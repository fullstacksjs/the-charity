import { createFamilyFormIds } from './CreateFamilyForm';
import {
  createFamilyModalId,
  openCreateFamilyModal,
} from './CreateFamilyModal';

describe('Create Family Modal', () => {
  beforeEach(() => {
    cy.mount(<>{openCreateFamilyModal()}</>);
  });

  it('should contains a modal element with correct title', () => {
    cy.findByRole('dialog')
      .should('have.attr', 'aria-modal', 'true')
      .and('contain.text', 'ایجاد خانواده جدید');
  });

  it('should contains createFamily form', () => {
    cy.findByTestId(createFamilyModalId).within(() => {
      cy.findByTestId(createFamilyFormIds.form).should('exist');
    });
  });
});
