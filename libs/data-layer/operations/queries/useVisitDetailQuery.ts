import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiVisitDetailQuery,
  ApiVisitDetailQueryVariables,
} from '@camp/data-layer';
import type { VisitDetail, VisitKeys } from '@camp/domain';
import type { Nullable } from '@fullstacksjs/toolbox';

import {
  getVisitDetail,
  getVisitKeys,
  VisitDetailFragment,
  VisitKeysFragment,
} from '../fragments';

export const VisitDocument = gql`
  query VisitDetail($id: uuid!) {
    visit_by_pk(id: $id) {
      ...VisitKeys
      ...VisitDetail
    }
  }
  ${VisitKeysFragment}
  ${VisitDetailFragment}
`;

export interface VisitDto {
  visit: Nullable<VisitDetail & VisitKeys>;
}

interface Variables {
  id: string;
}

const toClient = (data: Nullable<ApiVisitDetailQuery>): VisitDto => {
  return {
    visit: data?.visit_by_pk
      ? {
          ...getVisitKeys(data.visit_by_pk),
          ...getVisitDetail(data.visit_by_pk),
        }
      : undefined,
  };
};

const toApiVariables = (data: Variables): ApiVisitDetailQueryVariables => {
  return { id: data.id };
};

export const useVisitDetailQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(VisitDocument, {
    ...options,
    skip: !options.variables?.id,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
