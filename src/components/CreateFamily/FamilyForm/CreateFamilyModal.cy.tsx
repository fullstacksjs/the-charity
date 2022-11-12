import { noop } from '@fullstacksjs/toolbox';

import { CreateFamilyModalStateCtx } from '../../../contexts';
import { createFamilyFormIds } from './CreateFamilyForm';
import { CreateFamilyModal, createFamilyModalId } from './CreateFamilyModal';

describe('Create Family Modal', () => {
  beforeEach(() => {
    cy.mount(
      <CreateFamilyModalStateCtx.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ isModalOpen: true, closeModal: noop, openModal: noop }}
      >
        <CreateFamilyModal />
      </CreateFamilyModalStateCtx.Provider>,
    );
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
