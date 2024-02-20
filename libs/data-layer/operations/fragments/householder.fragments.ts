import { gql } from '@apollo/client';

export const HouseholderKeysFragment = gql`
  fragment HouseholderKeys on householder {
    id
  }
`;

export const HouseholderFragment = gql`
  fragment Householder on householder {
    name
    father_name
    surname
    religion
    gender
    status
    national_id
    dob
    province
    city
    nationality
    accommodation_type
    neighborhood
    address
    zip_code
    prior_accommodation_address
    health_description
  }
`;
