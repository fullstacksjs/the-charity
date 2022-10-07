import { CreateFamilyButton } from './CreateFamilyButton';

describe('Create Family Button', () => {
  beforeEach(() => {
    cy.mount(<CreateFamilyButton />);
  });

  it('should be a button with correct label', () => {
    cy.findByRole('button', { name: /ایجاد خانواده جدید/ }).should('exist');
  });
});
