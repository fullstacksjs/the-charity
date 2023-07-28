import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { Household } from '@camp/domain';
import { ApiOrderBy } from '@camp/domain';
import type { SortingState } from '@tanstack/react-table';

import type {
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '../../ApiOperations';
import {
  getHouseholdKeys,
  getHouseholdListItem,
  HouseholdKeysFragment,
  HouseholdListItemFragment,
} from '../fragments';

export const HouseholdListDocument = gql`
  query HouseholdList($order_by: [household_order_by!]) {
    household(order_by: $order_by) {
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

interface Variables {
  orderBy: SortingState;
}

const toApiVariables = (data: Variables): ApiHouseholdListQueryVariables => {
  return {
    order_by: data.orderBy.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: item.desc ? ApiOrderBy.Desc : ApiOrderBy.Asc,
      };
    }, {}),
  };
};

export const useHouseholdListQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(HouseholdListDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
