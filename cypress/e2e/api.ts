import { gql, GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(Cypress.env('APP_API_ENDPOINT'), {
  headers: { 'x-hasura-admin-secret': Cypress.env('APP_HASURA_ADMIN_SECRET') },
});

export function createHousehold(name: string) {
  return client
    .request(
      gql`
        mutation CreateHouseholdTest {
          insert_household_one(object: { name: "${name}" }) {
            id
          }
       }`,
    )
    .then(c => c.insert_household_one);
}

export function createProject(name: string) {
  return client
    .request(
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
