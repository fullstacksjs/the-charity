import { gql } from '@apollo/client';

export const MemberKeysFragment = gql`
  fragment MemberKeys on member {
    id
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
    household_id
    status
  }
`;


