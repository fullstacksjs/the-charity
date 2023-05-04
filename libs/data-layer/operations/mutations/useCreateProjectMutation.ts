import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import type { Project, ProjectStatus } from '@camp/domain';

import type {
  ApiCreateProjectMutation,
  ApiCreateProjectMutationVariables,
  ApiProjectListQuery,
} from '../../api';
import { ApiProjectListDocument, ApiProjectStatusEnum } from '../../api';
import { useMutation } from '../../apiClient/useMutation';

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

export const toProjectStatus = (status: ApiProjectStatusEnum): ProjectStatus =>
  status === ApiProjectStatusEnum.Done
    ? 'done'
    : status === ApiProjectStatusEnum.InProgress
    ? 'inProgress'
    : status === ApiProjectStatusEnum.Planning
    ? 'planning'
    : 'suspended';

export interface CreateProjectDto {
  project: Project;
}

const toClient = (
  data: ApiCreateProjectMutation | null | undefined,
): CreateProjectDto | null =>
  data?.insert_project_one == null
    ? null
    : {
        project: {
          id: data.insert_project_one.id,
          name: data.insert_project_one.name,
          description: data.insert_project_one.description,
          status: toProjectStatus(data.insert_project_one.status),
        },
      };

interface Variables {
  description?: string;
  name: string;
}

const toApiVariables = (
  variables: Variables,
): ApiCreateProjectMutationVariables => ({
  input: {
    name: variables.name,
    description: variables.description,
  },
});

export function useCreateProjectMutation(
  options?: MutationHookOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
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
