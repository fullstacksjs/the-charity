import { gql } from '@apollo/client';

export const MemberKeysFragment = gql`
  fragment MemberKeys on member {
    id
    household_id
  }
`;

export const MemberListItemFragment = gql`
  fragment MemberListItem on member {
    dob
    father_name
    gender
    name
    national_id
    nationality
    religion
    surname
    status
  }
`;
