import type { MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import type { Gender, Householder, HouseholderStatus } from '@camp/domain';

import type {
  ApiUpsertHouseholderMutation,
  ApiUpsertHouseholderMutationVariables,
} from '../../api';
import { ApiGenderEnum, ApiHouseholderStatusEnum } from '../../api';
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

export const toHouseholderStatus = (
  status: ApiHouseholderStatusEnum,
): HouseholderStatus =>
  status === ApiHouseholderStatusEnum.Completed ? 'completed' : 'draft';

export const toHouseholderGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';

const toClient = (
  data: ApiUpsertHouseholderMutation | null | undefined,
): UpsertHouseholder | null =>
  data?.insert_householder_one == null
    ? null
    : {
        householder: {
          name: data.insert_householder_one.name,
          status: toHouseholderStatus(data.insert_householder_one.status),
          fatherName: data.insert_householder_one.father_name ?? undefined,
          surname: data.insert_householder_one.surname ?? undefined,
          nationality: data.insert_householder_one.nationality ?? undefined,
          religion:
            (data.insert_householder_one.religion as 'islam' | null) ??
            undefined,
        },
      };

interface Variables {
  name: string;
  familyId: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  nationality?: string;
  religion?: string;
  gender?: Gender;
  city?: string;
  issuedAt: string;
}

// FIXME: add DOB too
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
          city: variables.city,
          gender:
            variables.gender === 'male'
              ? ApiGenderEnum.Male
              : ApiGenderEnum.Female,
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
