import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { VisitKeys, VisitListItem } from '@camp/domain';
import { ApiOrderBy } from '@camp/domain';
import type { Nullable } from '@fullstacksjs/toolbox';
import { isEmpty, isNotNull } from '@fullstacksjs/toolbox';
import type { PaginationState, SortingState } from '@tanstack/react-table';

import type {
  ApiVisitsQuery,
  ApiVisitsQueryVariables,
} from '../../ApiOperations';
import {
  getVisitKeys,
  getVisitListItem,
  VisitKeysFragment,
  VisitListItemFragment,
} from '../fragments';

export const VisitsDocument = gql`
  query Visits(
    $household_id: uuid!
    $order_by: [visit_order_by!]
    $limit: Int
    $offset: Int
  ) {
    visit(
      order_by: $order_by
      limit: $limit
      offset: $offset
      where: { household_id: { _eq: $household_id } }
    ) {
      ...VisitKeys
      ...VisitListItem
    }
    visit_aggregate {
      aggregate {
        count
      }
    }
  }
  ${VisitKeysFragment}
  ${VisitListItemFragment}
`;

export interface VisitsDto {
  visits: (VisitKeys & VisitListItem)[];
  totalCount: Nullable<number>;
}

const toClient = (data: ApiVisitsQuery | null): VisitsDto => {
  return {
    visits:
      data?.visit.filter(isNotNull).map(d => ({
        ...getVisitKeys(d),
        ...getVisitListItem(d),
      })) ?? [],
    totalCount: data?.visit_aggregate.aggregate?.count,
  };
};

interface Variables {
  householdId: string;
  orderBy: SortingState;
  range: PaginationState;
}

const toApiVariables = (data: Variables): ApiVisitsQueryVariables => {
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
    household_id: data.householdId,
  };
};

export const useHouseholderVisitsQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(VisitsDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
