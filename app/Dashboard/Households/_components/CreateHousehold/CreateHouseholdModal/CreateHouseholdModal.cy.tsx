import { useEffect } from 'react';

import { createHouseholdFormIds } from '../CreateHouseholdForm/CreateHouseholdForm.ids';
import { openCreateHouseholdModal } from './CreateHouseholdModal';
import { createHouseholdModalId } from './CreateHouseholdModal.ids';

const TestModal = () => {
  useEffect(() => {
    openCreateHouseholdModal();
  }, []);

  return null;
};

describe('Create Household Modal', () => {
  beforeEach(() => {
    cy.mount(<TestModal />);
  });

  it('should contains a modal element with correct title', () => {
    cy.findByRole('dialog')
      .should('have.attr', 'aria-modal', 'true')
      .and('contain.text', 'ایجاد خانوار جدید');
  });

  it('should contains createHousehold form', () => {
    cy.findByTestId(createHouseholdModalId).within(() => {
      cy.findByTestId(createHouseholdFormIds.form).should('exist');
    });
  });
});
