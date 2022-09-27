import { gql } from '@apollo/client';

export const ClientSideSchema = gql`
  extend type Mutation {
    createProject(name: String!, description: String): Project!
  }
`;
