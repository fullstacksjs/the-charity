import { FamilyList } from './FamilyList';

describe('Family List', () => {
  beforeEach(() => {
    cy.mount(<FamilyList />);
  });

  it.skip('should see table of fake data', () => {
    cy.log('noop');
  });
});
