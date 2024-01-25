import { AddHouseholderVisitButton } from './AddHouseholderVisitButton';
import { addHouseholderVisitButtonId } from './AddHouseholderVisitButton.ids';

describe('Create Project Button', () => {
  beforeEach(() => {
    cy.mount(<AddHouseholderVisitButton householdId="null" />);
  });

  it('should be visible to users', () => {
    cy.findByTestId(addHouseholderVisitButtonId).should('exist');
  });
});
