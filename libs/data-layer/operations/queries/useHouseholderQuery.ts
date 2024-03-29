import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables,
} from '@camp/data-layer';
import type { HouseholderIdentity, HouseholderKeys } from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';

import {
  getHouseholderIdentity,
  getHouseholderKeys,
  HouseholderIdentityFragment,
  HouseholderKeysFragment,
} from '../fragments';

export const HouseholderDocument = gql`
  query Householder($household_id: uuid!) {
    householder_by_pk(household_id: $household_id) {
      ...HouseholderKeys
      ...HouseholderIdentity
    }
  }
  ${HouseholderKeysFragment}
  ${HouseholderIdentityFragment}
`;

export interface HouseholderDto {
  householder: (HouseholderIdentity & HouseholderKeys) | undefined;
}

interface Variables {
  id: string;
}

const toClient = (data: ApiHouseholderQuery | Nullish): HouseholderDto => {
  return {
    householder: data?.householder_by_pk
      ? {
          ...getHouseholderKeys(data.householder_by_pk),
          ...getHouseholderIdentity(data.householder_by_pk),
        }
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
