import { gql } from '@apollo/client';
import type { NeverFn, QueryOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { ApiHouseholdListQuery } from '@camp/data-layer';
import type { Household } from '@camp/domain';

import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';

export const HouseholdListDocument = gql`
  query HouseholdList {
    household(order_by: { created_at: desc }) {
      ...HouseholdKeys
      ...HouseholdListItem
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdListItemFragment}
`;

export interface HouseholdListDto {
  household: Household[];
}

const toClient = (data: ApiHouseholdListQuery | null) => {
  return {
    household:
      data?.household.filter(Boolean).map(d => ({
        ...getHouseholdKeys(d),
        ...getHouseholdListItem(d),
      })) ?? [],
  };
};

export const useHouseholdListQuery = (
  options?: QueryOptions<typeof toClient, NeverFn>,
) =>
  useQuery<typeof toClient, NeverFn>(HouseholdListDocument, {
    ...options,
    mapper: toClient,
    mapVariables: () => ({}),
  });
