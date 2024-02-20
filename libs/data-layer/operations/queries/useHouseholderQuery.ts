import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type {
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables,
} from '@camp/data-layer';
import type {
  HouseholderContact,
  HouseholderIdentity,
  HouseholderKeys,
} from '@camp/domain';
import type { Nullable } from '@fullstacksjs/toolbox';

import {
  getHouseholderContact,
  getHouseholderIdentity,
  getHouseholderKeys,
  HouseholderContactFragment,
  HouseholderIdentityFragment,
  HouseholderKeysFragment,
} from '../fragments';

export const HouseholderDocument = gql`
  query Householder($household_id: uuid!) {
    householder_by_pk(household_id: $household_id) {
      ...HouseholderKeys
      ...HouseholderIdentity
      ...HouseholderContact
    }
  }
  ${HouseholderContactFragment}
  ${HouseholderKeysFragment}
  ${HouseholderIdentityFragment}
`;

export interface HouseholderDto {
  householder:
    | (HouseholderContact & HouseholderIdentity & HouseholderKeys)
    | undefined;
}

interface Variables {
  id: string;
}

const toClient = (data: Nullable<ApiHouseholderQuery>): HouseholderDto => {
  return {
    householder: data?.householder_by_pk
      ? {
          ...getHouseholderKeys(data.householder_by_pk),
          ...getHouseholderIdentity(data.householder_by_pk),
          ...getHouseholderContact(data.householder_by_pk),
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
