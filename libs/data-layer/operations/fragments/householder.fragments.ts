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
    religion
    gender
    status
    national_id
    dob
  }
`;

export const HouseholderContactFragment = gql`
  fragment HouseholderContact on householder {
    province
    city
    nationality
    accommodation_type
    neighborhood
    address
    zip_code
    prior_accommodation_address
  }
`;

export const HouseholderHealthFragment = gql`
  fragment HouseholderHealth on householder {
    addiction_status
    disability_status
    disability_description
    health_status
    health_description
    health_comment
    insurances
  }
`;

export const HouseholderFinancialFragment = gql`
  fragment HouseholderFinancial on householder {
    job
    income
    skills
    subside_types
    subside
    rent
    bank_card_number
    bank_account_number
    financial_comment
  }
`;
