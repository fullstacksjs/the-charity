import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteHouseholdMutation,
  ApiDeleteHouseholdMutationVariables,
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '@camp/data-layer';
import type { Household, HouseholdKeys } from '@camp/domain';
import { isNull } from '@fullstacksjs/toolbox';

import { getHouseholdKeys, HouseholdKeysFragment } from '../fragments';
import { HouseholdListDocument } from '../queries';

const Document = gql`
  mutation DeleteHousehold($id: uuid!) {
    delete_household_by_pk(id: $id) {
      ...HouseholdKeys
      name
    }
  }
  ${HouseholdKeysFragment}
`;

export interface DeleteHousehold {
  household: (HouseholdKeys & Pick<Household, 'name'>) | undefined;
}

const toClient = (data: ApiDeleteHouseholdMutation | null): DeleteHousehold => {
  const deleted = data?.delete_household_by_pk;

  return {
    household: !isNull(deleted)
      ? { ...getHouseholdKeys(deleted), name: deleted.name }
      : undefined,
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiDeleteHouseholdMutationVariables => ({
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
