import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Household, Project } from '@camp/domain';

import type { ApiProjectQuery, ApiProjectQueryVariables } from '../../api';
import { useQuery } from '../../apiClient';
import { toHousehold, toProject } from '../../mappers';

const Document = gql`
  query Project($id: uuid!) {
    project_by_pk(id: $id) {
      id
      name
      status
      description
      start_date
      due_date
      households {
        household {
          name
          code
          id
          status
          severity
        }
      }
    }
  }
`;

export interface ProjectDto {
  project: Project;
  households: Household[];
}

const toClient = (
  data: ApiProjectQuery | null | undefined,
): ProjectDto | null =>
  data?.project_by_pk == null
    ? null
    : {
        project: toProject(data.project_by_pk),
        households: data.project_by_pk.households.map(({ household }) =>
          toHousehold(household),
        ),
      };

export const useProjectQuery = (
  options: Apollo.QueryHookOptions<ApiProjectQuery, ApiProjectQueryVariables>,
) => useQuery(Document, { ...options, mapper: toClient });
