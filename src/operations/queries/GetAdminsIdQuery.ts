import { gql } from '@apollo/client';

export const GetAdminsIdQuery = gql`
  query getAdmins {
    admins {
      id
    }
  }
`;
