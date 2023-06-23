import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCreateHouseholdMutation,
  ApiCreateHouseholdMutationVariables,
  ApiHouseholdListQuery,
} from '@camp/data-layer';
import type { Household } from '@camp/domain';

import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';
import { HouseholdListDocument } from '../queries';

const Document = gql`
  mutation CreateHousehold($name: String!) {
    insert_household_one(object: { name: $name }) {
      ...HouseholdKeys
      ...HouseholdListItem
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdListItemFragment}
`;

export interface CreateHouseholdDto {
  household: Pick<Household, 'id' | 'name'> | undefined;
}

const toClient = (
  data: ApiCreateHouseholdMutation | null,
): CreateHouseholdDto => {
  return {
    household: data?.insert_household_one
      ? {
          ...getHouseholdKeys(data.insert_household_one),
          ...getHouseholdListItem(data.insert_household_one),
        }
      : undefined,
  };
};

interface Variables {
  name: string;
}

const toApiVariables = (
  variables: Variables,
): ApiCreateHouseholdMutationVariables => ({
  name: variables.name,
});

export function useCreateHouseholdMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, result, opts) {
      const newHouseholds = result.data?.insert_household_one;
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
