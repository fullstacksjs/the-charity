import { householderIdentityFormIds as ids } from '../../app/components/HouseholderForm/HouseholderIdentityForm.ids';
import { familyDetailIds as tabIds } from '../../app/pages/Dashboard/Families/FamilyDetail/FamilyDetail.ids';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { householderFixture } from '../fixtures/householder';
import { familyFixture } from '../fixtures/project';
import * as api from './api';

const idMapping = {
  name: ids.firstNameInput,
  surname: ids.lastNameInput,
  fatherName: ids.fatherNameInput,
  nationalId: ids.nationalIdInput,
  gender: ids.genderInput,
  nationality: ids.nationalityInput,
  religion: ids.religionInput,
};

describe('Householder Identity', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.families);
    const name = familyFixture.name();
    cy.wrap(api.createFamily(name));
    cy.findByText(name).click();
    cy.findByTestId(tabIds.householderIdentityTab).click();
  });

  it('[OK]: Admin wants to add householder identity information', () => {
    cy.findByTestId(ids.form).within(() => {
      const mock = householderFixture();
      Object.keys(mock).forEach(key => {
        const inputValue = mock[key];
        const inputTestId = idMapping[key];
        if (inputValue != null) cy.findByTestId(inputTestId).type(inputValue);
      });
      cy.root().submit();
    });

    cy.findByTestId(ids.notification.success, {
      timeout: 1e4,
    }).should('exist');
  });

  it('[NOK]: Admin wants to add householder identity without specifying a name', () => {
    cy.findByTestId(ids.form).within(() => {
      cy.findByTestId(ids.submitBtn).should('be.disabled');
    });
  });
});
