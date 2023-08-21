import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiDeleteHouseholdMutation,
  ApiDeleteHouseholdMutationVariables,
} from '@camp/data-layer';
import type { Household, HouseholdKeys } from '@camp/domain';
import { isNull } from '@fullstacksjs/toolbox';

import { getHouseholdKeys, HouseholdKeysFragment } from '../fragments';

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
      const household = data?.delete_household_by_pk;
      if (!household) return;

      cache.evict({ id: cache.identify(household) });
      cache.gc();
    },
  });
};
