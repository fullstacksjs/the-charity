import { CreateMemberButton } from './CreateMemberButton';
import { createMemberButtonId } from './CreateMemberButton.ids';

describe('Create Member Button', () => {
  beforeEach(() => {
    cy.mount(<CreateMemberButton />);
  });

  it('should be visible to users', () => {
    cy.findByTestId(createMemberButtonId).should('exist');
  });
});
