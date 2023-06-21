import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiProjectListQuery,
  ApiProjectListQueryVariables,
} from '@camp/data-layer';
import type { ProjectKeys, ProjectListItem } from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';

import {
  getProjectKeys,
  getProjectListItem,
  ProjectKeysFragment,
  ProjectListItemFragment,
} from '../fragments';

export const ProjectListDocument = gql`
  query ProjectList($offset: Int, $limit: Int) {
    project_aggregate(offset: $offset, limit: $limit) {
      nodes {
        ...ProjectKeys
        ...ProjectListItem
      }
    }
  }
  ${ProjectKeysFragment}
  ${ProjectListItemFragment}
`;

interface Variables {
  offset?: number;
  limit?: number;
}

export interface ProjectList {
  projects: (ProjectKeys & ProjectListItem)[];
}

const toClient = (data: ApiProjectListQuery | Nullish): ProjectList => {
  const projects = data?.project_aggregate.nodes;

  return {
    projects:
      projects?.map(p => ({
        ...getProjectKeys(p),
        ...getProjectListItem(p),
      })) ?? [],
  };
};

const toApiVariables = (
  data: Variables | undefined,
): ApiProjectListQueryVariables => {
  return {
    limit: data?.limit,
    offset: data?.offset,
  };
};

export const useProjectListQuery = (
  options?: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(ProjectListDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
