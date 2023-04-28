import { gql, GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(Cypress.env('APP_API_ENDPOINT'), {
  headers: { 'x-hasura-admin-secret': Cypress.env('APP_HASURA_ADMIN_SECRET') },
});

export function createFamily(name: string) {
  return client
    .request(
      gql`
        mutation CreateFamilyTest {
          insert_family_one(object: { name: "${name}" }) {
            id
          }
       }`,
    )
    .then(c => c.insert_family_one);
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
