import { type MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  type City,
  type Gender,
  type Householder,
  type Nationality,
  type Religion,
} from '@camp/domain';

import {
  ApiCityEnum,
  ApiGenderEnum,
  ApiHouseholderDocument,
  ApiNationalityEnum,
  ApiReligionEnum,
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
          national_id
        ]
      }
    ) {
      city
      gender
      dob
      national_id
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
  nationalId?: string;
  nationality?: Nationality;
  religion?: Religion;
  gender?: Gender;
  cityOfBirth?: City;
  issuedAt?: City;
}

const toApiGender = (gender: Gender): ApiGenderEnum =>
  gender === 'male' ? ApiGenderEnum.Male : ApiGenderEnum.Female;
const toApiCity = (_: City): ApiCityEnum => ApiCityEnum.Tehran;
const toApiReligion = (_: Religion): ApiReligionEnum => ApiReligionEnum.Islam;
const toApiNationality = (_: Nationality): ApiNationalityEnum =>
  ApiNationalityEnum.Ir;

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
          national_id: variables.nationalId,
          father_name: variables.fatherName,
          issued_at:
            variables.issuedAt == null
              ? undefined
              : toApiCity(variables.issuedAt),
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
