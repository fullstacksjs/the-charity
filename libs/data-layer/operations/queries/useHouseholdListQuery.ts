import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { HouseholdKeys, HouseholdListItem } from '@camp/domain';
import { ApiOrderBy } from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';
import { isEmpty } from '@fullstacksjs/toolbox';
import type { PaginationState, SortingState } from '@tanstack/react-table';

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
  query HouseholdList(
    $order_by: [household_order_by!]
    $limit: Int
    $offset: Int
  ) {
    household_aggregate(order_by: $order_by, limit: $limit, offset: $offset) {
      nodes {
        ...HouseholdKeys
        ...HouseholdListItem
      }
      aggregate {
        count
      }
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdListItemFragment}
`;

export interface HouseholdListDto {
  household: (HouseholdKeys & HouseholdListItem)[];
  totalCount: Nullish | number;
}

const toClient = (data: ApiHouseholdListQuery | null): HouseholdListDto => {
  return {
    household:
      data?.household_aggregate.nodes.filter(Boolean).map(d => ({
        ...getHouseholdKeys(d),
        ...getHouseholdListItem(d),
      })) ?? [],
    totalCount: data?.household_aggregate.aggregate?.count,
  };
};

interface Variables {
  orderBy: SortingState;
  range: PaginationState;
}

const toApiVariables = (data: Variables): ApiHouseholdListQueryVariables => {
  return {
    order_by: isEmpty(Object.keys(data.orderBy))
      ? { created_at: ApiOrderBy.Desc }
      : data.orderBy.reduce((acc, item) => {
          return {
            ...acc,
            [item.id]: item.desc ? ApiOrderBy.Desc : ApiOrderBy.Asc,
          };
        }, {}),
    limit: data.range.pageSize,
    offset: data.range.pageSize * data.range.pageIndex,
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
