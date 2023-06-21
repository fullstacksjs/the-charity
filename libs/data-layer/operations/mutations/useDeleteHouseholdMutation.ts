import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteHouseholdMutationMutation,
  ApiDeleteHouseholdMutationMutationVariables,
  ApiProjectListQuery,
} from '@camp/data-layer';
import type { Household } from '@camp/domain';

import { HouseholdListDocument } from '../queries';

const Document = gql`
  mutation DeleteHouseholdMutation($id: uuid!) {
    delete_household_by_pk(id: $id) {
      id
      name
    }
  }
`;

export interface DeleteHousehold {
  household: Pick<Household, 'id' | 'name'>;
}

const toClient = (
  data: ApiDeleteHouseholdMutationMutation | null,
): DeleteHousehold | null => {
  if (data?.delete_household_by_pk == null) return null;

  return {
    household: {
      id: data.delete_household_by_pk.id,
      name: data.delete_household_by_pk.name,
    },
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteHouseholdMutationMutationVariables => ({
  id: variables.id,
});

export const useDeleteHouseholdMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }) {
      const id = data?.delete_household_by_pk?.id;
      if (!id) return;

      const current = cache.readQuery<ApiProjectListQuery>({
        query: HouseholdListDocument,
        variables: { id },
      });

      const newNodes =
        current?.project_aggregate.nodes.filter(p => p.id !== id) ?? [];

      cache.writeQuery<ApiProjectListQuery>({
        query: HouseholdListDocument,
        variables: { id },
        data: { project_aggregate: { nodes: newNodes } },
      });
    },
  });
};
