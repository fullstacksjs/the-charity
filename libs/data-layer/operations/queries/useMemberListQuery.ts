import { gql } from '@apollo/client';
import type { QueryHookOptions } from '@camp/api-client';
import { useQuery } from '@camp/api-client';
import type { Member } from '@camp/domain';
import type { Nullish } from '@fullstacksjs/toolbox';

import type {
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '../../ApiOperations';
import {
  getMemberKeys,
  getMemberListItem,
  HouseholdDetailFragment,
  HouseholdKeysFragment,
  MemberKeysFragment,
  MemberListItemFragment,
} from '../fragments';

export const MemberListDocument = gql`
  query MemberList($household_id: uuid!) {
    member(
      where: { household_id: { _eq: $household_id } }
      order_by: { created_at: asc }
    ) {
      ...MemberKeys
      ...MemberListItem
      household {
        ...HouseholdKeys
        ...HouseholdDetail
      }
    }
  }
  ${MemberKeysFragment}
  ${MemberListItemFragment}
  ${HouseholdKeysFragment}
  ${HouseholdDetailFragment}
`;

export interface MemberList {
  members: Member[];
}

const toClient = (data: ApiMemberListQuery | Nullish) => {
  const members = data?.member;
  if (members == null) return null;
  return {
    members: members.filter(Boolean).map(d => ({
      ...getMemberKeys(d),
      ...getMemberListItem(d),
    })),
  };
};

interface Variables {
  id: string;
}

const mapVariables = (variables: Variables): ApiMemberListQueryVariables => {
  return {
    household_id: variables.id,
  };
};

export const useMemberListQuery = (
  options: QueryHookOptions<typeof toClient, typeof mapVariables>,
) =>
  useQuery<typeof toClient, typeof mapVariables>(MemberListDocument, {
    ...options,
    mapper: toClient,
    mapVariables,
  });
