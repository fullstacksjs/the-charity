import { gql } from '@apollo/client';

export const DocumentKeysFragment = gql`
  fragment DocumentKeys on document {
    id
    storage_id
  }
`;

export const DocumentDetailFragment = gql`
  fragment DocumentDetail on document {
    url
  }
`;
