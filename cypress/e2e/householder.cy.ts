import { pruneUndefinedOrEmpty } from '@fullstacksjs/toolbox';

import { householderFormIds as ids } from '../../app/components/HouseholderForm/HouseholderForm.ids';
import { messages } from '../../app/messages';
import { familyDetailIds as tabIds } from '../../app/pages/Dashboard/Families/FamilyDetail/FamilyDetail.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { householderFixture } from '../fixtures/householder';
import { familyFixture } from '../fixtures/project';
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

type Input = SelectInput | TextInput;

const idMapping = {
  name: { id: ids.firstNameInput, type: 'text' },
  surname: { id: ids.lastNameInput, type: 'text' },
  fatherName: { id: ids.fatherNameInput, type: 'text' },
  nationalId: { id: ids.nationalIdInput, type: 'text' },
  gender: { id: ids.genderInput, type: 'select', options: messages.genders },
  nationality: {
    id: ids.nationalityInput,
    type: 'select',
    options: messages.nationalities,
  },
  religion: {
    id: ids.religionInput,
    type: 'select',
    options: messages.religions,
  },
  dob: { id: ids.dobInput, type: 'text' },
  city: { id: ids.cityOfBirthInput, type: 'select', options: messages.cities },
  issuedAt: { id: ids.issuedAtInput, type: 'select', options: messages.cities },
} as Record<string, Input>;

describe('Householder', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    const name = familyFixture.name();
    cy.wrap(api.createFamily(name));
    cy.findByText(name).click();
    cy.findByTestId(tabIds.householderIdentityTab).click();
  });

  it('[OK]: Admin wants to add householder information', () => {
    cy.findByTestId(ids.form).within(() => {
      const mock = householderFixture();
      Object.keys(mock).forEach(key => {
        const input = idMapping[key];
        const mockValue = mock[key];

        const { id, type } = input;
        const inputValue =
          type === 'text' ? mockValue : input.options[mockValue];

        if (inputValue == null) return;
        if (type === 'text') cy.findByTestId(id).type(inputValue);
        if (type === 'select')
          cy.findByTestId(id).click().findByText(inputValue).click();
      });

      cy.root().submit();
    });

    cy.findByTestId(ids.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });

  it('[NOK]: Admin wants to add householder without specifying a name', () => {
    cy.findByTestId(ids.form).within(() => {
      cy.findByTestId(ids.submitBtn).should('be.disabled');
    });
  });

  it('[OK]: Admin wants to undo changes after editing form', () => {
    const mock = pruneUndefinedOrEmpty(householderFixture());

    cy.findByTestId(ids.form).within(() => {
      Object.keys(mock).forEach(key => {
        const input = idMapping[key];
        const mockValue = mock[key];

        const { id, type } = input;
        const inputValue =
          type === 'text' ? mockValue : input.options[mockValue];

        if (inputValue == null) return;
        if (type === 'text')
          cy.findByTestId(id).find('input').type(inputValue).blur();
        if (type === 'select')
          cy.findByTestId(id).click('bottom').findByText(inputValue).click();
      });

      cy.root().submit();
    });

    cy.findByTestId(ids.notification.success, {
      timeout: 1e4,
    }).should('exist');

    Object.keys(mock).forEach(key => {
      const input = idMapping[key];
      const mockValue = mock[key];
      const { id, type } = input;
      const inputValue = type === 'text' ? mockValue : input.options[mockValue];

      if (inputValue == null) return;
      if (type === 'text') cy.findByTestId(id).find('input').clear().blur();
      // NOTE: clicking on the same selected element unselects it
      else if (type === 'select')
        cy.findByTestId(id).click().findByText(inputValue).click();
    });
    cy.findByTestId(ids.undoBtn).click();

    Object.keys(mock).forEach(key => {
      const input = idMapping[key];
      const mockValue = mock[key];

      const { id, type } = input;
      const inputValue = type === 'text' ? mockValue : input.options[mockValue];

      if (inputValue == null) return;
      // FIXME
      if (id === ids.dobInput)
        cy.findByTestId(id).find('input').should('not.have.value', '');
      else if (type === 'text')
        cy.findByTestId(id).find('input').should('have.value', inputValue);
      else if (type === 'select')
        cy.findByTestId(id)
          .find('input[type="search"]')
          .should('have.value', inputValue);
    });
  });
});
