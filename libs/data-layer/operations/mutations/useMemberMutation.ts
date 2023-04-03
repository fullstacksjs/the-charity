import { type MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  type Country,
  type Gender,
  type Member,
  type MemberStatus,
  type Religion,
} from '@camp/domain';

import {
  type ApiMemberMutation,
  type ApiMemberMutationVariables,
} from '../../api';
import { ApiGenderEnum, ApiMemberStatusEnum } from '../../api';
import { useMutation } from '../../apiClient';

const Document = gql`
  mutation Member($input: member_insert_input!) {
    insert_member_one(
      object: $input
      on_conflict: { constraint: member_pkey }
    ) {
      id
      name
      surname
      father_name
      nationality
      gender
      religion
      status
    }
  }
`;

export interface InsertMember {
  member: Member;
}

const toMemberStatus = (status: ApiMemberStatusEnum): MemberStatus =>
  status === ApiMemberStatusEnum.Completed ? 'completed' : 'draft';

const toMemberGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';

const toClient = (
  data: ApiMemberMutation | null | undefined,
): InsertMember | null =>
  data?.insert_member_one == null
    ? null
    : {
        member: {
          name: data.insert_member_one.name,
          id: data.insert_member_one.id,
          status: toMemberStatus(data.insert_member_one.status),
          surname: data.insert_member_one.surname ?? undefined,
          fatherName: data.insert_member_one.father_name ?? undefined,
          nationality:
            (data.insert_member_one.nationality as 'ir' | null) ?? undefined,
          religion:
            (data.insert_member_one.religion as 'islam' | null) ?? undefined,
        },
      };

interface Variables {
  name: string;
  familyId: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  nationality?: Country;
  religion?: Religion;
  gender?: Gender;
}

const toApiVariables = (
  variables?: Variables | null,
): ApiMemberMutationVariables | undefined =>
  variables == null
    ? undefined
    : {
        input: {
          name: variables.name,
          surname: variables.surname,
          family_id: variables.familyId,
          father_name: variables.fatherName,
          religion: variables.religion,
          nationality: variables.nationality,
          gender:
            variables.gender === 'male'
              ? ApiGenderEnum.Male
              : ApiGenderEnum.Female,
        },
      };

export const useMemberMutation = (
  options?: MutationHookOptions<ApiMemberMutation, ApiMemberMutationVariables>,
) => {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
  });
};
