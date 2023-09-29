import { gql, GraphQLClient } from 'graphql-request';

import type { Household, HouseholdSeverityEnum } from '../../libs/domain';

const client = new GraphQLClient(Cypress.env('APP_API_ENDPOINT'), {
  headers: { 'x-hasura-admin-secret': Cypress.env('APP_HASURA_ADMIN_SECRET') },
});

export interface Id {
  id: string;
}

export function createHousehold(
  name: string,
  severity?: HouseholdSeverityEnum,
) {
  const variables = `
    name: "${name}",
    ${severity ? `severity: ${severity},` : ''}
  `;

  return client
    .request<{ insert_household_one: Household }>(
      gql`
        mutation CreateHouseholdTest {
          insert_household_one(object: { ${variables} }) {
            id
            name
            severity
          }
       }`,
    )
    .then(c => c.insert_household_one);
}

export function createProject(name: string): Promise<Id> {
  return client
    .request<{ insert_project_one: Id }>(
      gql`
        mutation CreateProjectTest {
          insert_project_one (object: { name: "${name}" }) {
            id
          }
        }
      `,
    )
    .then(c => c.insert_project_one);
}
