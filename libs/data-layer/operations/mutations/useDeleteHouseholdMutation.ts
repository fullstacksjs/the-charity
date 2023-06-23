import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteHouseholdMutationMutation,
  ApiDeleteHouseholdMutationMutationVariables,
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '@camp/data-layer';
import type { Household } from '@camp/domain';

import { HouseholdKeysFragment } from '../fragments';
import { HouseholdListDocument } from '../queries';

const Document = gql`
  mutation DeleteHouseholdMutation($id: uuid!) {
    delete_household_by_pk(id: $id) {
      ...HouseholdKeys
      name
    }
  }
  ${HouseholdKeysFragment}
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

      cache.updateQuery<ApiHouseholdListQuery, ApiHouseholdListQueryVariables>(
        { query: HouseholdListDocument },
        value => {
          return {
            ...value,
            household: value?.household.filter(h => h.id !== id) ?? [],
          };
        },
      );
    },
  });
};
