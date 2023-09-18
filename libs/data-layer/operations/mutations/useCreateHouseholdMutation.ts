import { gql } from '@apollo/client';
import { mergeDeep } from '@apollo/client/utilities';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiCreateHouseholdMutation,
  ApiCreateHouseholdMutationVariables,
} from '@camp/data-layer';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';

import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';

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
  household: (HouseholdKeys & HouseholdListItem) | undefined;
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
      const newHousehold = result.data?.insert_household_one;
      if (!newHousehold) return;

      cache.modify({
        fields: {
          household(existingHouseholdsRefs = []) {
            const newHouseholdRef = cache.writeFragment({
              data: newHousehold,
              fragment: gql`
                fragment NewHousehold on household {
                  ...HouseholdKeys
                  ...HouseholdListItem
                }
                ${HouseholdKeysFragment}
                ${HouseholdListItemFragment}
              `,
              fragmentName: 'NewHousehold',
            });
            return [newHouseholdRef!, ...existingHouseholdsRefs];
          },
          household_aggregate(existingAggregate) {
            return mergeDeep(existingAggregate, {
              aggregate: {
                count: existingAggregate.aggregate?.count
                  ? existingAggregate.aggregate.count + 1
                  : undefined,
              },
            });
          },
        },
      });

      return options?.update?.(cache, result, opts);
    },
  });
}
