import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiHouseholdQuery,
  ApiHouseholdQueryVariables,
} from '@camp/data-layer';
import type { HouseholdDetail, HouseholdKeys } from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';

import {
  getHouseholdDetail,
  getHouseholdKeys,
  HouseholdDetailFragment,
  HouseholdKeysFragment,
} from '../fragments';

export const HouseholdDocument = gql`
  query Household($id: uuid!) {
    household_by_pk(id: $id) {
      ...HouseholdKeys
      ...HouseholdDetail
    }
  }
  ${HouseholdKeysFragment}
  ${HouseholdDetailFragment}
`;

export interface HouseholdDto {
  household: Nullish | (HouseholdDetail & HouseholdKeys);
}

interface Variables {
  id: string;
}

const toClient = (data: ApiHouseholdQuery | Nullish): HouseholdDto => {
  return {
    household: data?.household_by_pk
      ? {
          ...getHouseholdKeys(data.household_by_pk),
          ...getHouseholdDetail(data.household_by_pk),
        }
      : undefined,
  };
};

const toApiVariables = (data: Variables): ApiHouseholdQueryVariables => {
  return { id: data.id };
};

export const useHouseholdQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(HouseholdDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
