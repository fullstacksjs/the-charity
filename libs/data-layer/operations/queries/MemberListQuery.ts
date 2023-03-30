import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { type Gender, type Member, type MemberStatus } from '@camp/domain';

import {
  type ApiMemberListQuery,
  type ApiMemberListQueryVariables,
} from '../../api';
import { ApiGenderEnum, ApiMemberStatusEnum } from '../../api';
import { useQuery } from '../../apiClient';

const Document = gql`
  query memberList($family_id: uuid!) {
    member(where: { family_id: { _eq: $family_id } }) {
      id
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

export const toMemberStatus = (status: ApiMemberStatusEnum): MemberStatus =>
  status === ApiMemberStatusEnum.Completed ? 'completed' : 'draft';

export const toMemberGender = (gender: ApiGenderEnum): Gender =>
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
          nationality: m.nationality ?? undefined,
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
