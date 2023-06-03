import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { projectFixture } from '../fixtures/project';
import * as api from './api';

const API_ENDPOINT = Cypress.env('APP_API_ENDPOINT');

describe('Project List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.projects);
  });

  it('should add a project to the project list when create a project', () => {
    const name = projectFixture.name();

    cy.intercept('POST', API_ENDPOINT).as('createProject');
    cy.wrap(api.createProject(name));
    cy.wait('@createProject');
    cy.visit(AppRoute.projects);
    cy.findByText(name).should('exist');
  });
});
