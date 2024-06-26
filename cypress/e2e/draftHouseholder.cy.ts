import { isNull, pruneValueWhen } from '@fullstacksjs/toolbox';

import { householderFormIds as ids } from '../../app/Dashboard/Households/HouseholdDetail/_components/HouseholderForm/_components/HouseholderIdentityForm/HouseholderIdentityForm.ids';
import { householdDetailIds as tabIds } from '../../app/Dashboard/Households/HouseholdDetail/HouseholdDetail.ids';
import { messages } from '../../app/messages';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';
import { householderFixture } from '../fixtures/householder';
import * as api from './api';

interface TextInput {
  id: string;
  type: 'text';
}

interface SelectInput {
  type: 'select';
  id: string;
  options: Record<string, string>;
}

interface DateInput {
  type: 'date';
  id: string;
  format: (date: Date) => string;
}

type Input = DateInput | SelectInput | TextInput;

const idMapping = {
  name: { id: ids.firstNameInput, type: 'text' },
  surname: { id: ids.lastNameInput, type: 'text' },
  fatherName: { id: ids.fatherNameInput, type: 'text' },
  nationalId: { id: ids.nationalIdInput, type: 'text' },
  gender: { id: ids.genderInput, type: 'select', options: messages.genders },

  religion: {
    id: ids.religionInput,
    type: 'select',
    options: messages.religions,
  },
  dob: {
    id: ids.dobInput,
    type: 'date',
    format: (date: Date) =>
      new Intl.DateTimeFormat('fa-IR', { dateStyle: 'long' } as any).format(
        date,
      ),
  },
} as Record<string, Input>;

describe('Householder', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.households);
    const name = householdFixture.name();
    cy.wrap(api.createHousehold(name));
    cy.findByText(name).click();
    cy.findByTestId(tabIds.householderTab).click();
  });

  it('[OK]: Admin wants to add householder information', () => {
    const mock = pruneValueWhen(householderFixture(), isNull);
    addHouseholder(mock);
  });

  it('[NOK]: Admin wants to add householder without specifying a name', () => {
    cy.findByTestId(ids.form).within(() => {
      cy.findByTestId(ids.submitBtn).should('be.disabled');
    });
  });

  it('[OK]: Admin wants to undo changes after editing form', () => {
    const mock = pruneValueWhen(householderFixture(), isNull);

    addHouseholder(mock);
    cy.findByTestId(ids.editBtn, { timeout: 1e4 }).click();
    emptyHouseholderForm(mock);
    cy.findByTestId(ids.cancel).click();
    compareHouseholderForm(mock);
  });

  it('[OK]: Admin wants to revisit householder information', () => {
    const mock = pruneValueWhen(householderFixture(), isNull);
    addHouseholder(mock);
    cy.reload();
    compareHouseholderForm(mock);
  });
});

type Mock = ReturnType<typeof householderFixture>;

function emptyHouseholderForm(mock: Mock) {
  Object.keys(mock).forEach(key => {
    const input = idMapping[key];
    const mockValue = mock[key];
    if (input == null) throw Error(`mock for ${key} is not defined`);
    const { id, type } = input;
    const inputValue = type === 'select' ? input.options[mockValue] : mockValue;

    if (inputValue == null) return;

    // NOTE: clicking on the same selected element unselects it
    if (type === 'select') {
      cy.findByTestId(id).click();
      cy.findByTestId(id).findByText(inputValue).click();
    } else {
      cy.findByTestId(id).find('input').clear();
      cy.findByTestId(id).find('input').blur();
    }
  });
}

function addHouseholder(mock: Mock) {
  cy.findByTestId(ids.form).within(() => {
    Object.keys(mock).forEach(key => {
      const input = idMapping[key];
      const mockValue = mock[key];

      const { id, type } = input;
      const inputValue =
        type === 'select' ? input.options[mockValue] : mockValue;

      if (inputValue == null) return;

      if (type === 'select') {
        cy.findByTestId(id).click();
        cy.findByTestId(id).findByText(inputValue).click();
      } else {
        cy.findByTestId(id).find('input').type(inputValue);
        cy.findByTestId(id).find('input').blur();
      }
    });

    cy.root().submit();
  });

  cy.findNotification('success').should('exist');

  return mock;
}

function compareHouseholderForm(mock: Mock) {
  Object.keys(mock).forEach(key => {
    const input = idMapping[key];
    const mockValue = mock[key];
    const { id, type } = input;
    const inputValue = type === 'select' ? input.options[mockValue] : mockValue;
    if (inputValue == null) return;

    if (type === 'date')
      cy.findByTestId(id)
        .find('input')
        .should('have.value', input.format(new Date(inputValue)));
    else if (type === 'text')
      cy.findByTestId(id).find('input').should('have.value', inputValue);
    else if (type === 'select')
      cy.findByTestId(id)
        .find('input[type="search"]')
        .should('have.value', inputValue);
  });
}
