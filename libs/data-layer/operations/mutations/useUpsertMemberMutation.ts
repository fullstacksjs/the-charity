import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  GenderEnum,
  Member,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';

import type {
  ApiMemberListQuery,
  ApiUpsertMemberMutation,
  ApiUpsertMemberMutationVariables,
} from '../../ApiOperations';
import {
  getMemberKeys,
  getMemberListItem,
  HouseholdDetailFragment,
  HouseholdKeysFragment,
  MemberKeysFragment,
  MemberListItemFragment,
} from '../fragments';
import { MemberListDocument } from '../queries';

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

export interface InsertMember {
  member: Member | undefined;
}

const toClient = (data: ApiUpsertMemberMutation | null): InsertMember => {
  const member = data?.insert_member_one;
  return {
    member: member
      ? {
          ...getMemberKeys(member),
          ...(getMemberListItem(member) as Member),
        }
      : undefined,
  };
};

interface Variables {
  id?: string;
  name: string;
  householdId: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date | null;
  nationality?: NationalityEnum;
  religion?: ReligionEnum;
  gender?: GenderEnum;
}

const toApiVariables = (
  variables: Variables,
): ApiUpsertMemberMutationVariables => ({
  input: {
    id: variables.id,
    name: variables.name,
    surname: variables.surname,
    household_id: variables.householdId,
    father_name: variables.fatherName,
    national_id: variables.nationalId,
    religion: variables.religion,
    nationality: variables.nationality,
    gender: variables.gender,
    dob: variables.dob?.toISOString(),
  },
});

export const useUpsertMemberMutation = (
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) => {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }, { variables }) {
      const newMember = data?.insert_member_one;

      if (newMember) {
        const householdId = variables?.input.household_id;
        const memberListData = cache.readQuery<ApiMemberListQuery>({
          query: MemberListDocument,
          variables: { household_id: householdId },
        });

        const newMembers = [
          ...(memberListData?.member ?? []).filter(m => m.id !== newMember.id),
          newMember,
        ];

        cache.writeQuery<ApiMemberListQuery>({
          query: MemberListDocument,
          variables: { household_id: householdId },
          data: {
            member: newMembers,
          },
        });
      }
    },
  });
};
