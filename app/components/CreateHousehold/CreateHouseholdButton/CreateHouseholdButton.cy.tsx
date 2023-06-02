import { CreateHouseholdButton } from './CreateHouseholdButton';

describe('Create Household Button', () => {
  beforeEach(() => {
    cy.mount(<CreateHouseholdButton />);
  });

  it('should be a button with correct label', () => {
    cy.findByRole('button', { name: /ایجاد خانواده جدید/ }).should('exist');
  });
});
