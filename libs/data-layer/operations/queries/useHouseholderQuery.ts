import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables,
} from '@camp/data-layer';
import type { Householder, HouseholderKeys } from '@camp/domain';
import type { Nullable } from '@fullstacksjs/toolbox';

import {
  getHouseholder,
  getHouseholderKeys,
  HouseholderContactFragment,
  HouseholderHealthFragment,
  HouseholderIdentityFragment,
  HouseholderKeysFragment,
} from '../fragments';

export const HouseholderDocument = gql`
  query Householder($household_id: uuid!) {
    householder_by_pk(household_id: $household_id) {
      ...HouseholderKeys
      ...HouseholderContact
      ...HouseholderIdentity
      ...HouseholderHealth
    }
  }

  ${HouseholderIdentityFragment}
  ${HouseholderContactFragment}
  ${HouseholderHealthFragment}
  ${HouseholderKeysFragment}
`;

export interface HouseholderDto {
  householder: (Householder & HouseholderKeys) | undefined;
}

interface Variables {
  id: string;
}

const toClient = (data: Nullable<ApiHouseholderQuery>): HouseholderDto => {
  return {
    householder: data?.householder_by_pk
      ? ({
          ...getHouseholderKeys(data.householder_by_pk),
          ...getHouseholder(data.householder_by_pk),
        } as Householder)
      : undefined,
  };
};

const toApiVariables = (data: Variables): ApiHouseholderQueryVariables => {
  return { household_id: data.id };
};

export const useHouseholderQuery = (
  options: QueryHookOptions<typeof toClient, typeof toApiVariables>,
) =>
  useQuery<typeof toClient, typeof toApiVariables>(HouseholderDocument, {
    ...options,
    mapper: toClient,
    mapVariables: toApiVariables,
  });
