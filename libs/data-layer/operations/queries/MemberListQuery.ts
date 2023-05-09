import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Member } from '@camp/domain';

import type {
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '../../api';
import { useQuery } from '../../apiClient';
import { toGender } from '../../mappers';

const Document = gql`
  query memberList($family_id: uuid!) {
    member(where: { family_id: { _eq: $family_id } }) {
      dob
      father_name
      gender
      name
      national_id
      nationality
      religion
      surname
      id
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
  return {
    members: members.map(member => ({
      name: member.name,
      id: member.id,
      fatherName: member.father_name ?? undefined,
      surname: member.surname ?? undefined,
      nationalId: member.national_id ?? undefined,
      nationality: (member.nationality as 'ir' | null) ?? undefined,
      religion: (member.religion as 'islam' | null) ?? undefined,
      gender: member.gender == null ? undefined : toGender(member.gender),
      dob: member.dob == null ? undefined : new Date(member.dob),
      status: 'draft',
    })),
  };
};

export const useMemberQuery = (
  options: Apollo.QueryHookOptions<
    ApiMemberListQuery,
    ApiMemberListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
