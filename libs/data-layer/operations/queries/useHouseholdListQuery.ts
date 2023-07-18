import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { ApiHouseholdOrderBy, Household, InputMaybe } from '@camp/domain';
import { SortingState } from '@tanstack/react-table';

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
  orderBy: InputMaybe<ApiHouseholdOrderBy | ApiHouseholdOrderBy[]> | undefined;
}

const toApiVariables = (data: Variables): ApiHouseholdListQueryVariables => {
  return { order_by: data.orderBy };
};

export const useHouseholdListQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(HouseholdListDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
