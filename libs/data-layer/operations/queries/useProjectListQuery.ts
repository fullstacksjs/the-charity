import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

import type {
  ApiProjectListQuery,
  ApiProjectListQueryVariables,
} from '../../api';
import { useQuery } from './useQuery';

const Document = gql`
  query ProjectList($offset: Int, $limit: Int) {
    project_aggregate(offset: $offset, limit: $limit) {
      nodes {
        name
        id
      }
    }
  }
`;

export interface ProjectListItem {
  id: string;
  name: string;
}

export interface ProjectList {
  projects: ProjectListItem[];
}

const toClient = (
  data: ApiProjectListQuery | null | undefined,
): ProjectList => ({
  projects:
    data?.project_aggregate == null
      ? []
      : data.project_aggregate.nodes.map(f => ({
          id: f.id,
          name: f.name,
        })),
});

export const useProjectListQuery = (
  options?: Apollo.QueryHookOptions<
    ApiProjectListQuery,
    ApiProjectListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
