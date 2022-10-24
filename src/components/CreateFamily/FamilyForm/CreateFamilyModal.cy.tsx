import { noop } from '@fullstacksjs/toolbox';

import { createFamilyFormIDs } from './CreateFamilyForm';
import { CreateFamilyModal, createFamilyModalID } from './CreateFamilyModal';

describe('Create Family Modal', () => {
  beforeEach(() => {
    cy.mount(<CreateFamilyModal opened onClose={noop} />);
  });

  it('should contains a modal element with correct title', () => {
    cy.findByRole('dialog')
      .should('have.attr', 'aria-modal', 'true')
      .and('contain.text', 'ایجاد خانواده جدید');
  });

  it('should contains createFamily form', () => {
    cy.findByTestId(createFamilyModalID).within(() => {
      cy.findByTestId(createFamilyFormIDs.form).should('exist');
    });
  });
});
