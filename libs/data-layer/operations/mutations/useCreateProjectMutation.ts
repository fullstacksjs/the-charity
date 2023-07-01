import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCreateProjectMutation,
  ApiCreateProjectMutationVariables,
  ApiProjectListQuery,
} from '@camp/data-layer';
import type { ProjectKeys, ProjectListItem } from '@camp/domain';

import {
  getProjectKeys,
  getProjectListItem,
  ProjectKeysFragment,
  ProjectListItemFragment,
} from '../fragments';
import { ProjectListDocument } from '../queries';

export const CreateProjectDocument = gql`
  mutation CreateProject($input: project_insert_input!) {
    insert_project_one(object: $input) {
      ...ProjectKeys
      ...ProjectListItem
    }
  }
  ${ProjectKeysFragment}
  ${ProjectListItemFragment}
`;

export interface CreateProjectDto {
  project: (ProjectKeys & ProjectListItem) | undefined;
}

const toClient = (data: ApiCreateProjectMutation | null): CreateProjectDto => {
  const project = data?.insert_project_one;

  return {
    project: project
      ? {
          ...getProjectKeys(project),
          ...getProjectListItem(project),
        }
      : undefined,
  };
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
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(
    CreateProjectDocument,
    {
      ...options,
      toClient,
      toApiVariables,
      update(cache, { data }) {
        const newProject = data?.insert_project_one;
        if (!newProject) return;

        const prevProjects = cache.readQuery<ApiProjectListQuery>({
          query: ProjectListDocument,
        });

        const newNodes = [
          ...(prevProjects?.project_aggregate.nodes ?? []),
          newProject,
        ];

        cache.writeQuery({
          query: ProjectListDocument,
          data: {
            project_aggregate: { nodes: newNodes },
          },
        });
      },
    },
  );
}
