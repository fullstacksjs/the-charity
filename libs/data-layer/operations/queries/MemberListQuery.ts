import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { type Gender, type Member, type MemberStatus } from '@camp/domain';

import {
  type ApiMemberListQuery,
  type ApiMemberListQueryVariables,
} from '../../api';
import { ApiGenderEnum, ApiMemberStatusEnum } from '../../api';
import { useQuery } from './useQuery';

const Document = gql`
  query MemberList($id: uuid!) {
    member_by_pk(id: $id) {
      id
      household_id
      father_name
      gender
      name
      surname
      religion
      status
      nationality
    }
  }
`;

export interface MemberList {
  member: Member;
}

export const toMemberStatus = (status: ApiMemberStatusEnum): MemberStatus =>
  status === ApiMemberStatusEnum.Completed ? 'completed' : 'draft';

export const toMemberGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';

const toClient = (
  data: ApiMemberListQuery | null | undefined,
): MemberList | null =>
  data?.member_by_pk == null
    ? null
    : {
        member: {
          name: data.member_by_pk.name,
          surname: data.member_by_pk.surname ?? undefined,
          fatherName: data.member_by_pk.father_name ?? undefined,
          nationality: data.member_by_pk.nationality ?? undefined,
          religion: (data.member_by_pk.religion as 'islam' | null) ?? undefined,
          status: toMemberStatus(data.member_by_pk.status),
        },
      };

export const useMemberQuery = (
  options: Apollo.QueryHookOptions<
    ApiMemberListQuery,
    ApiMemberListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
