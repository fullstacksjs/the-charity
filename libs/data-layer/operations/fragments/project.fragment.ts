import { gql } from '@apollo/client';

export const ProjectKeysFragment = gql`
  fragment ProjectKeys on project {
    id
  }
`;

export const ProjectDetailFragment = gql`
  fragment ProjectDetail on project {
    name
    description
    status
    start_date
    due_date
    created_at
    updated_at
  }
`;

export const ProjectListItemFragment = gql`
  fragment ProjectListItem on project {
    name
    status
    created_at
    updated_at
  }
`;
