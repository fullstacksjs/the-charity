import { gql } from '@apollo/client';

export const GetSchemaDescriptionQuery = gql`
  query Query {
    __schema {
      description
    }
  }
`;
