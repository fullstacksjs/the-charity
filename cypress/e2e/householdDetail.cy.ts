import { householdDetailIds } from '../../app/Dashboard/Households/HouseholdDetail/HouseholdDetail.ids';
import type { Household } from '../../libs/domain';
import { HouseholdSeverityEnum } from '../../libs/domain';
import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';
import * as API from './api';

describe('Household', () => {
  beforeEach(() => {
    cy.login(admin);
  });

  it('[OK]: Admin wants to see created household information', () => {
    const name = householdFixture.name();
    cy.wrap<Promise<Household>, Household>(
      API.createHousehold(name, HouseholdSeverityEnum.Critical),
    ).then(household => {
      cy.visit(AppRoute.householdDetail, { params: { id: household.id } });
      cy.findByTestId(householdDetailIds.nameField)
        .find('input')
        .should('have.value', household.name);
      cy.findByTestId(householdDetailIds.severityField).should(
        'contain',
        'اضطراری',
      );
      cy.findByTestId(householdDetailIds.memberCountField).should('contain', 0);
      cy.findByTestId(householdDetailIds.statusField).should(
        'contain',
        'تکمیل نشده',
      );
    });

    const h2Name = householdFixture.name();
    cy.wrap<Promise<Household>, Household>(
      API.createHousehold(h2Name, HouseholdSeverityEnum.Normal),
    ).then(household => {
      cy.visit(AppRoute.householdDetail, { params: { id: household.id } });
      cy.findByTestId(householdDetailIds.nameField)
        .find('input')
        .should('have.value', household.name);
      cy.findByTestId(householdDetailIds.severityField).should(
        'contain',
        'عادی',
      );
    });
  });
});
