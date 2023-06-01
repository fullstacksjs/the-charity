import { gql } from '@apollo/client';
import type { Gender, Member, Nationality, Religion } from '@camp/domain';

import type {
  ApiMemberListQuery,
  ApiUpsertMemberMutation,
  ApiUpsertMemberMutationVariables,
} from '../../api';
import { ApiMemberListDocument } from '../../api';
import type { MutationOptions } from '../../apiClient';
import { useMutation } from '../../apiClient';
import {
  toApiDate,
  toApiGender,
  toApiNationality,
  toApiReligion,
  toMember,
} from '../../mappers';

const Document = gql`
  mutation UpsertMember($input: member_insert_input!) {
    insert_member_one(
      object: $input
      on_conflict: {
        constraint: member_pkey
        update_columns: [
          gender
          father_name
          name
          nationality
          religion
          national_id
          surname
          dob
        ]
      }
    ) {
      id
      gender
      father_name
      name
      nationality
      religion
      national_id
      surname
      dob
      status
    }
  }
`;

export interface InsertMember {
  member: Member;
}

const toClient = (
  data: ApiUpsertMemberMutation | null | undefined,
): InsertMember | null => {
  const member = data?.insert_member_one;
  if (member == null) return null;
  return { member: toMember(member) };
};

interface Variables {
  id?: string;
  name: string;
  familyId: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date | null;
  nationality?: Nationality;
  religion?: Religion;
  gender?: Gender;
}

const toApiVariables = (
  variables: Variables,
): ApiUpsertMemberMutationVariables => ({
  input: {
    id: variables.id,
    name: variables.name,
    surname: variables.surname,
    family_id: variables.familyId,
    father_name: variables.fatherName,
    national_id: variables.nationalId,
    religion:
      variables.religion == null
        ? undefined
        : toApiReligion(variables.religion),
    nationality:
      variables.nationality == null
        ? undefined
        : toApiNationality(variables.nationality),
    gender:
      variables.gender == null ? undefined : toApiGender(variables.gender),
    dob: variables.dob == null ? undefined : toApiDate(variables.dob),
  },
});

export const useUpsertMemberMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, { data: member }, { variables }) {
      const newMember = member?.insert_member_one;

      if (newMember) {
        const familyId = variables?.input.family_id;
        const memberListData = cache.readQuery<ApiMemberListQuery>({
          query: ApiMemberListDocument,
          variables: { family_id: familyId },
        });

        const newMembers = [...(memberListData?.member ?? []), newMember];

        cache.writeQuery<ApiMemberListQuery>({
          query: ApiMemberListDocument,
          variables: { family_id: familyId },
          data: {
            member: newMembers,
          },
        });
      }
    },
  });
};
