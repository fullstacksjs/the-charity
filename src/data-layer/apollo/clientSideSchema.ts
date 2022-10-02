import { gql } from '@apollo/client';

export const ClientSideSchema = gql`
  type Mutation {
    createDraftFamily(name: String!): DraftFamily!
  }
`;
