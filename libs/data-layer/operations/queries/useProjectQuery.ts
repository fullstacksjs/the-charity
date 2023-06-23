import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiProjectQuery,
  ApiProjectQueryVariables,
} from '@camp/data-layer';
import type {
  HouseholdDetail,
  HouseholdKeys,
  ProjectDetail,
  ProjectKeys,
} from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';

import {
  getHouseholdDetail,
  getHouseholdKeys,
  getProjectDetail,
  getProjectKeys,
  HouseholdDetailFragment,
  HouseholdKeysFragment,
  ProjectDetailFragment,
  ProjectKeysFragment,
} from '../fragments';

export const ProjectDocument = gql`
  query Project($id: uuid!) {
    project_by_pk(id: $id) {
      ...ProjectKeys
      ...ProjectDetail
      households {
        household {
          ...HouseholdKeys
          ...HouseholdDetail
        }
      }
    }
  }
  ${ProjectKeysFragment}
  ${ProjectDetailFragment}
  ${HouseholdKeysFragment}
  ${HouseholdDetailFragment}
`;

export interface ProjectDto {
  project: (ProjectDetail & ProjectKeys) | undefined;
  households: (HouseholdDetail & HouseholdKeys)[];
}

export interface Variables {
  id: string;
}

const toClient = (data: ApiProjectQuery | Nullish): ProjectDto => {
  const project = data?.project_by_pk;

  return {
    project: project
      ? {
          ...getProjectKeys(project),
          ...getProjectDetail(project),
        }
      : undefined,
    households:
      project?.households.map(({ household }) => ({
        ...getHouseholdKeys(household),
        ...getHouseholdDetail(household),
      })) ?? [],
  };
};

export const mapVariables = (
  variables: Variables,
): ApiProjectQueryVariables => {
  return {
    id: variables.id,
  };
};

export const useProjectQuery = (
  options: QueryHookOptions<typeof toClient, typeof mapVariables>,
) =>
  useQuery<typeof toClient, typeof mapVariables>(ProjectDocument, {
    ...options,
    mapper: toClient,
    mapVariables,
  });
