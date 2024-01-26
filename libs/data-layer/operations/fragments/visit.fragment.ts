import { gql } from '@apollo/client';

export const VisitKeysFragment = gql`
  fragment VisitKeys on visit {
    id
    household_id
  }
`;

export const VisitFragment = gql`
  fragment Visit on visit {
    name
    vistor
    date
    description
    status
    documents {
      url
      id
      storage_id
    }
  }
`;

export const VisitListItemFragment = gql`
  fragment VisitListItem on visit {
    date
    description
    documents {
      url
      id
      storage_id
    }
  }
`;
