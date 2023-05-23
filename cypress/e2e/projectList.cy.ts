import { AppRoute } from '../../libs/router/AppRoutes';
import { admin } from '../fixtures/admin';
import { projectFixture } from '../fixtures/project';
import * as api from './api';

describe('Project List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(AppRoute.projects);
  });

  it('should add a project to the project list when create a project', () => {
    const name = projectFixture.name();
    cy.wrap(api.createProject(name));
    cy.visit(AppRoute.projects);
    cy.findByText(name).should('exist');
  });
});
