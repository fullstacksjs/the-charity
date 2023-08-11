import { ApiMemberListFixture } from '@camp/fixtures';
import { aliasMutation, aliasQuery } from '@camp/test';

import { createMemberButtonId } from '../MemberForm/CreateMemberButton/CreateMemberButton.ids';
import { memberFormIds } from '../MemberForm/MemberForm.ids';
import { MemberList } from './MemberList';

describe('MemberList', () => {
  beforeEach(() => {
    cy.intercept({ method: 'POST', url: '/api' }, req => {
      aliasQuery(req, 'MemberList', ApiMemberListFixture);
      aliasMutation(req, 'UpsertMember', ApiMemberListFixture);
    });
    cy.mount(<MemberList householdId="null" />);
    cy.wait('@MemberList');
  });

  it('should list all members', () => {
    cy.findAllByTestId(memberFormIds.form).should('have.length', 1);
  });

  it('should add a form', () => {
    cy.findAllByTestId(memberFormIds.form).should('have.length', 1);
    cy.findByTestId(createMemberButtonId).click();
    cy.findAllByTestId(memberFormIds.form).should('have.length', 2);
    cy.findByTestId(createMemberButtonId).click();
    cy.findAllByTestId(memberFormIds.form).should('have.length', 3);
  });

  it('should delete not created form on cancel', () => {
    cy.findAllByTestId(memberFormIds.form).should('have.length', 1);
    cy.findByTestId(createMemberButtonId).click();
    cy.findAllByTestId(memberFormIds.form).should('have.length', 2);
    cy.findByTestId(createMemberButtonId).click();
    cy.findAllByTestId(memberFormIds.form).should('have.length', 3);

    cy.findAllByTestId(memberFormIds.form)
      .eq(2)
      .findByTestId(memberFormIds.firstNameInput)
      .type('Third Form');

    cy.findAllByTestId(memberFormIds.form)
      .eq(1)
      .findByTestId(memberFormIds.cancelBtn)
      .click();

    cy.findAllByTestId(memberFormIds.form).should('have.length', 2);

    cy.findAllByTestId(memberFormIds.form)
      .eq(1)
      .findByTestId(memberFormIds.firstNameInput)
      .find('input')
      .should('have.value', 'Third Form');
  });

  it('should remove draft form on submit', () => {
    cy.findAllByTestId(memberFormIds.form).should('have.length', 1);
    cy.findByTestId(createMemberButtonId).click();

    cy.findAllByTestId(memberFormIds.form)
      .eq(1)
      .findByTestId(memberFormIds.firstNameInput)
      .type('علی');

    cy.findAllByTestId(memberFormIds.form)
      .eq(1)
      .findByTestId(memberFormIds.submitBtn)
      .click();

    cy.findAllByTestId(memberFormIds.form).should('have.length', 1);
  });
});
