import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import type { Gender, Member, Nationality, Religion } from '@camp/domain';

import type { ApiMemberMutation, ApiMemberMutationVariables } from '../../api';
import { ApiMemberDocument } from '../../api';
import { useMutation } from '../../apiClient';
import {
  toApiDate,
  toApiGender,
  toApiNationality,
  toApiReligion,
  toMember,
} from '../../mappers';

const Document = gql`
  mutation Member($input: member_insert_input!) {
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
  data: ApiMemberMutation | null | undefined,
): InsertMember | null => {
  const member = data?.insert_member_one;
  if (member == null) return null;
  return { member: toMember(member) };
};

interface Variables {
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

const toApiVariables = (variables: Variables): ApiMemberMutationVariables => ({
  input: {
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

export const useMemberMutation = (
  options?: MutationHookOptions<ApiMemberMutation, ApiMemberMutationVariables>,
) => {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, { data: member }, { variables }) {
      const newMember = member?.insert_member_one;
      const memberId = variables?.input.id;

      if (newMember) {
        cache.writeQuery({
          query: ApiMemberDocument,
          variables: { id: memberId },
          data: {
            member_by_pk: {
              ...newMember,
            },
          },
        });
      }
    },
  });
};
