import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Member } from '@camp/domain';

import type {
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '../../api';
import { useQuery } from '../../apiClient';
import { toMember } from '../../mappers';

const Document = gql`
  query MemberList($household_id: uuid!) {
    member(
      where: { household_id: { _eq: $household_id } }
      order_by: { created_at: asc }
    ) {
      dob
      father_name
      gender
      name
      national_id
      nationality
      religion
      surname
      id
      household_id
      father_name
      gender
      status
    }
  }
`;

export interface MemberList {
  members: Member[];
}

const toClient = (
  data: ApiMemberListQuery | null | undefined,
): MemberList | null => {
  const members = data?.member;
  if (members == null) return null;
  return { members: members.map(m => toMember(m)) };
};

export const useMemberListQuery = (
  options: Apollo.QueryHookOptions<
    ApiMemberListQuery,
    ApiMemberListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
