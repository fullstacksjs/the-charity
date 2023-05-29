import { gql } from '@apollo/client';
import type {
  City,
  Gender,
  Householder,
  Nationality,
  Religion,
} from '@camp/domain';

import type {
  ApiUpsertHouseholderMutation,
  ApiUpsertHouseholderMutationVariables,
} from '../../api';
import { ApiHouseholderDocument } from '../../api';
import type { MutationOptions } from '../../apiClient';
import { useMutation } from '../../apiClient';
import {
  toApiCity,
  toApiDate,
  toApiGender,
  toApiNationality,
  toApiReligion,
  toHouseholder,
} from '../../mappers';

const Document = gql`
  mutation UpsertHouseholder($input: householder_insert_input!) {
    insert_householder_one(
      object: $input
      on_conflict: {
        constraint: householder_family_id_key
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
      city
      gender
      dob
      national_id
      father_name
      name
      nationality
      religion
      surname
      status
    }
  }
`;

export interface UpsertHouseholder {
  householder: Householder;
}

const toClient = (
  data: ApiUpsertHouseholderMutation | null,
): UpsertHouseholder | null => {
  const householder = data?.insert_householder_one;
  if (householder == null) return null;

  return { householder: toHouseholder(householder) };
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
  cityOfBirth?: City;
  issuedAt?: City;
}

const toApiVariables = (
  variables: Variables,
): ApiUpsertHouseholderMutationVariables => ({
  input: {
    name: variables.name,
    family_id: variables.familyId,
    national_id: variables.nationalId,
    father_name: variables.fatherName,
    surname: variables.surname,
    nationality:
      variables.nationality == null
        ? undefined
        : toApiNationality(variables.nationality),
    religion:
      variables.religion == null
        ? undefined
        : toApiReligion(variables.religion),
    city:
      variables.cityOfBirth == null
        ? undefined
        : toApiCity(variables.cityOfBirth),
    gender:
      variables.gender == null ? undefined : toApiGender(variables.gender),
    dob: variables.dob == null ? undefined : toApiDate(variables.dob),
  },
});

export function useUpsertHouseholderMutation(
  options?: MutationOptions<typeof toClient, typeof toApiVariables>,
) {
  return useMutation<typeof toClient, typeof toApiVariables>(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
    update(cache, { data: householder }, { variables }) {
      const newHouseholder = householder?.insert_householder_one;
      const familyId = variables?.input.family_id;

      if (newHouseholder) {
        cache.writeQuery({
          query: ApiHouseholderDocument,
          variables: { family_id: familyId },
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
