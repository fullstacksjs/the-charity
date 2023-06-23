import { gql } from '@apollo/client';

export const HouseholderKeysFragment = gql`
  fragment HouseholderKeys on householder {
    id
  }
`;

export const HouseholderIdentityFragment = gql`
  fragment HouseholderIdentity on householder {
    name
    father_name
    surname
    nationality
    religion
    city
    gender
    status
    national_id
    dob
  }
`;
