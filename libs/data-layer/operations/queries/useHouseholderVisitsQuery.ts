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
  query Visits($order_by: [visit_order_by!], $limit: Int, $offset: Int) {
    visit(order_by: $order_by, limit: $limit, offset: $offset) {
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
