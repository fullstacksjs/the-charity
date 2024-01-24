import { gql } from '@apollo/client';

export const VisitKeysFragment = gql`
  fragment VisitKeys on visit {
    id
  }
`;

export const VisitListItemFragment = gql`
  fragment VisitListItem on visit {
    date
    description
    documents {
      url
      id
    }
  }
`;
