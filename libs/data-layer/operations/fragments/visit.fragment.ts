import { gql } from '@apollo/client';

export const VisitKeysFragment = gql`
  fragment VisitKeys on visit {
    id
    household_id
  }
`;

export const VisitDetailFragment = gql`
  fragment VisitDetail on visit {
    name
    visitor
    date
    id
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

export const VisitNameFragment = gql`
  fragment VisitName on visit {
    name
  }
`;
