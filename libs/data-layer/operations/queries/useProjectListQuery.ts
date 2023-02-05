import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

import {
  type ApiProjectListQuery,
  type ApiProjectListQueryVariables,
} from '../../api';

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

export function useProjectListQuery(
  options?: Apollo.QueryHookOptions<
    ApiProjectListQuery,
    ApiProjectListQueryVariables
  >,
) {
  const { data, ...rest } = Apollo.useQuery(Document, options);

  return { data: toClient(data), ...rest } as const;
}
