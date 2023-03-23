import { type MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import { type Gender, type Householder } from '@camp/domain';

import {
  ApiGenderEnum,
  type ApiUpsertHouseholderMutation,
  type ApiUpsertHouseholderMutationVariables,
} from '../../api';
import { toHouseholder } from '../../mappers';
import { useMutation } from './useMutation';

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
          issued_at
          name
          nationality
          religion
          surname
        ]
      }
    ) {
      city
      gender
      dob
      father_name
      issued_at
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

export const toClient = (
  data: ApiUpsertHouseholderMutation | null | undefined,
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
  // nationalId?: string;
  nationality?: string;
  religion?: string;
  gender?: Gender;
  cityOfBirth?: string;
  issuedAt?: string;
}

const toApiGender = (gender: Gender): ApiGenderEnum =>
  gender === 'male' ? ApiGenderEnum.Male : ApiGenderEnum.Female;

// FIXME add DOB too
const toApiVariables = (
  variables?: Variables | null,
): ApiUpsertHouseholderMutationVariables | undefined =>
  variables == null
    ? undefined
    : {
        input: {
          name: variables.name,
          family_id: variables.familyId,
          father_name: variables.fatherName,
          issued_at: variables.issuedAt,
          surname: variables.surname,
          nationality: variables.nationality,
          religion: variables.religion,
          city: variables.cityOfBirth,
          gender:
            variables.gender != null
              ? toApiGender(variables.gender)
              : undefined,
        },
      };

export function useUpsertHouseholder(
  options?: MutationHookOptions<
    ApiUpsertHouseholderMutation,
    ApiUpsertHouseholderMutationVariables
  >,
) {
  return useMutation(Document, {
    ...options,
    mapData: toClient,
    mapVariables: toApiVariables,
  });
}
