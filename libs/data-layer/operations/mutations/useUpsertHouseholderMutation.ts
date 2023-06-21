import { gql } from '@apollo/client';
import type { MutationOptions } from '@camp/api-client';
import { useMutation } from '@camp/api-client';
import type {
  ApiUpsertHouseholderMutation,
  ApiUpsertHouseholderMutationVariables,
} from '@camp/data-layer';
import type {
  CityEnum,
  GenderEnum,
  Householder,
  NationalityEnum,
  ReligionEnum,
} from '@camp/domain';

import {
  getHouseholderIdentity,
  getHouseholderKeys,
  HouseholderIdentityFragment,
  HouseholderKeysFragment,
} from '../fragments';
import { HouseholderDocument } from '../queries';

const Document = gql`
  mutation UpsertHouseholder($input: householder_insert_input!) {
    insert_householder_one(
      object: $input
      on_conflict: {
        constraint: householder_household_id_key
        update_columns: [
          city
          gender
          dob
          father_name
          name
          nationality
          religion
          surname
          national_id
        ]
      }
    ) {
      ...HouseholderKeys
      ...HouseholderIdentity
    }
  }
  ${HouseholderKeysFragment}
  ${HouseholderIdentityFragment}
`;

export interface UpsertHouseholder {
  householder: Householder | undefined;
}

const toClient = (
  data: ApiUpsertHouseholderMutation | null,
): UpsertHouseholder => {
  const householder = data?.insert_householder_one;

  return {
    householder: householder
      ? {
          ...getHouseholderKeys(householder),
          ...(getHouseholderIdentity(householder) as Householder),
        }
      : undefined,
  };
};

interface Variables {
  name: string;
  householdId: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date | null;
  nationality?: NationalityEnum;
  religion?: ReligionEnum;
  gender?: GenderEnum;
  cityOfBirth?: CityEnum;
  issuedAt?: CityEnum;
}

const toApiVariables = (
  variables: Variables,
): ApiUpsertHouseholderMutationVariables => ({
  input: {
    name: variables.name,
    household_id: variables.householdId,
    national_id: variables.nationalId,
    father_name: variables.fatherName,
    surname: variables.surname,
    nationality: variables.nationality,
    religion: variables.religion,
    city: variables.cityOfBirth,
    gender: variables.gender,
    dob: variables.dob?.toISOString(),
  },
});

export function useUpsertHouseholderMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    toClient,
    toApiVariables,
    update(cache, { data }, { variables }) {
      const newHouseholder = data?.insert_householder_one;
      const householdId = variables?.input.household_id;

      if (newHouseholder) {
        cache.writeQuery({
          query: HouseholderDocument,
          variables: { household_id: householdId },
          data: {
            householder_by_pk: {
              ...newHouseholder,
            },
          },
        });
      }
    },
  });
}
