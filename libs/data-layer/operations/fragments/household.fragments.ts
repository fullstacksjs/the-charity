import { gql } from '@apollo/client';

export const HouseholdKeysFragment = gql`
  fragment HouseholdKeys on household {
    id
  }
`;

export const HouseholdDetailFragment = gql`
  fragment HouseholdDetail on household {
    name
    status
    severity
    code
    created_at
    updated_at
    members_count
  }
`;

export const HouseholdListItemFragment = gql`
  fragment HouseholdListItem on household {
    name
    severity
    status
  }
`;
