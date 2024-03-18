import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiVisitNameQuery,
  ApiVisitNameQueryVariables,
} from '@camp/data-layer';
import type { VisitKeys, VisitName } from '@camp/domain';
import type { Nullable } from '@fullstacksjs/toolbox';

import {
  getVisitKeys,
  getVisitName,
  VisitKeysFragment,
  VisitNameFragment,
} from '../fragments';

export const VisitNameDocument = gql`
  query VisitName($household_id: uuid!) {
    visit(where: { household_id: { _eq: $household_id } }) {
      ...VisitKeys
      ...VisitName
    }
  }
  ${VisitKeysFragment}
  ${VisitNameFragment}
`;

export interface VisitNameDto {
  visitNames: Nullable<(VisitKeys & VisitName)[]>;
}

interface Variables {
  householdId: string;
}

const toClient = (data: Nullable<ApiVisitNameQuery>): VisitNameDto => {
  return {
    visitNames: data?.visit
      ? data.visit.map(v => ({
          ...getVisitKeys(v),
          ...getVisitName(v),
        }))
      : undefined,
  };
};

const toApiVariables = (data: Variables): ApiVisitNameQueryVariables => {
  return { household_id: data.householdId };
};

export const useVisitNameQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(VisitNameDocument, {
    ...options,
    skip: !options.variables?.householdId,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
