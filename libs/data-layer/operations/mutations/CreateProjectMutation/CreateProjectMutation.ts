import * as Apollo from '@apollo/client';

import type {
  ApiCreateProjectMutation,
  ApiCreateProjectMutationVariables,
  ApiProjectListQuery,
  ApiProjectStatusEnum,
} from '../../../api';
import { ApiCreateProjectDocument, ApiProjectListDocument } from '../../../api';
import { toClientMutationFn } from '../toClientMutationFn';

export interface CreateProject {
  project: {
    id: any;
    name: string;
    description?: string | null;
    status: ApiProjectStatusEnum;
  };
}

const toClient = (
  data: ApiCreateProjectMutation | null | undefined,
): CreateProject | null =>
  data?.insert_project_one == null
    ? null
    : {
        project: {
          id: data.insert_project_one.id,
          name: data.insert_project_one.name,
          description: data.insert_project_one.description,
          status: data.insert_project_one.status,
        },
      };

export function useCreateProjectMutation(
  options?: Apollo.MutationHookOptions<
    ApiCreateProjectMutation,
    ApiCreateProjectMutationVariables
  >,
) {
  const [m, { data, ...rest }] = Apollo.useMutation(ApiCreateProjectDocument, {
    ...options,
    update(cache, { data: project }) {
      const newProject = project?.insert_project_one;
      const prevProjects = cache.readQuery<ApiProjectListQuery>({
        query: ApiProjectListDocument,
      });

      if (prevProjects && newProject) {
        cache.writeQuery({
          query: ApiProjectListDocument,
          data: {
            project_aggregate: {
              nodes: [...prevProjects.project_aggregate.nodes, newProject],
            },
          },
        });
      }
    },
  });

  return [
    toClientMutationFn(m, toClient),
    { data: toClient(data), ...rest },
  ] as const;
}
