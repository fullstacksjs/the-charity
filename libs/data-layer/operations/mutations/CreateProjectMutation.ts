import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';

import type {
  ApiCreateProjectMutation,
  ApiCreateProjectMutationVariables,
  ApiProjectListQuery,
  ApiProjectStatusEnum,
} from '../../api';
import { ApiProjectListDocument } from '../../api';
import { useMutation } from './useMutation';

const Document = gql`
  mutation CreateProject($input: project_insert_input!) {
    insert_project_one(object: $input) {
      id
      name
      description
      status
    }
  }
`;

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
  options?: MutationHookOptions<
    ApiCreateProjectMutation,
    ApiCreateProjectMutationVariables
  >,
) {
  return useMutation(Document, {
    ...options,
    mapper: toClient,
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
}
