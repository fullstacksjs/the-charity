import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCompleteHouseholdMutation,
  ApiCompleteHouseholdMutationVariables,
  ApiHouseholdListQuery,
} from '@camp/data-layer';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';

import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';
import { HouseholdListDocument } from '../queries';

const Document = gql`
  mutation CompleteHousehold($id: uuid!) {
    update_household_by_pk(
      pk_columns: { id: $id }
      _set: { status: Completed }
    ) {
      ...HouseholdKeys
      ...HouseholdListItem
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdListItemFragment}
`;

export interface CompleteHouseholdDto {
  household: (HouseholdKeys & HouseholdListItem) | undefined;
}

const toClient = (
  data: ApiCompleteHouseholdMutation | null,
): CompleteHouseholdDto => {
  const household = data?.update_household_by_pk;
  return {
    household: household
      ? {
          ...getHouseholdKeys(household),
          ...getHouseholdListItem(household),
        }
      : undefined,
  };
};

interface Variables {
  id: string;
}

const toApiVariables = (
  variables: Variables,
): ApiCompleteHouseholdMutationVariables => ({
  id: variables.id,
});

export function useCompleteHouseholdMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, result, opts) {
      const newHouseholds = result.data?.update_household_by_pk;
      if (!newHouseholds) return;

      const prevHouseholdsQuery = cache.readQuery<ApiHouseholdListQuery>({
        query: HouseholdListDocument,
      });

      const newHousehold = [
        ...(prevHouseholdsQuery?.household ?? []),
        newHouseholds,
      ];

      cache.writeQuery<ApiHouseholdListQuery>({
        query: HouseholdListDocument,
        data: { household: newHousehold },
      });

      return options?.update?.(cache, result, opts);
    },
  });
}
