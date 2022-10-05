import { gql } from '@apollo/client';

export const ClientSchema = gql`
  extend type Mutation {
    createProject(name: String!, description: String): Project!
  }
`;
