import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Gender, Member, MemberStatus } from '@camp/domain';

import type {
  ApiMemberListQuery,
  ApiMemberListQueryVariables,
} from '../../api';
import { ApiGenderEnum, ApiMemberStatusEnum } from '../../api';
import { useQuery } from '../../apiClient';

const Document = gql`
  query memberList($household_id: uuid!) {
    member(where: { household_id: { _eq: $household_id } }) {
      id
      household_id
      father_name
      gender
      status
      name
      surname
      father_name
      nationality
      gender
      religion
    }
  }
`;

export interface MemberList {
  members: Member[];
}

const toMemberStatus = (status: ApiMemberStatusEnum): MemberStatus =>
  status === ApiMemberStatusEnum.Completed ? 'completed' : 'draft';

const toMemberGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';

const toClient = (
  data: ApiMemberListQuery | null | undefined,
): MemberList | null => ({
  members:
    data?.member == null
      ? []
      : data.member.map(m => ({
          id: m.id,
          name: m.name,
          surname: m.surname ?? undefined,
          gender: toMemberGender(m.gender!),
          fatherName: m.father_name ?? undefined,
          nationality: (m.nationality as 'ir' | null) ?? undefined,
          religion: (m.religion as 'islam' | null) ?? undefined,
          status: toMemberStatus(m.status),
        })),
});

export const useMemberQuery = (
  options: Apollo.QueryHookOptions<
    ApiMemberListQuery,
    ApiMemberListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
