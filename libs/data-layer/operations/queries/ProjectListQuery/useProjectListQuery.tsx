import * as Apollo from '@apollo/client';

import type {
  ApiProjectListQuery,
  ApiProjectListQueryVariables,
} from '../../api';
import { ApiProjectListDocument } from '../../api';

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
  const { data, ...rest } = Apollo.useQuery(ApiProjectListDocument, options);

  return { data: toClient(data), ...rest } as const;
}
