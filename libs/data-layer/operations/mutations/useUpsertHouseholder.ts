import { type MutationHookOptions } from '@apollo/client';
import { gql } from '@apollo/client';
import { type Householder, type HouseholderStatus } from '@camp/domain';

import {
  ApiHouseholderStatusEnum,
  type ApiUpsertHouseholderMutation,
  type ApiUpsertHouseholderMutationVariables,
} from '../../api';
import { useMutation } from './useMutation';

// FIXME: surename needs to become surname in schema
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
          surename
        ]
      }
    ) {
      city
      gender
      dob
      father_name
      name
      nationality
      religion
      surename
      status
    }
  }
`;

type PartialHouseholder = {
  [P in keyof Householder]?: Householder[P] | null | undefined;
};

export interface UpsertHouseholder {
  householder: PartialHouseholder;
}

export const toHouseholderStatus = (
  status: ApiHouseholderStatusEnum,
): HouseholderStatus =>
  status === ApiHouseholderStatusEnum.Completed ? 'completed' : 'draft';

const toClient = (
  data: ApiUpsertHouseholderMutation | null | undefined,
): UpsertHouseholder | null =>
  data?.insert_householder_one == null
    ? null
    : {
        householder: {
          name: data.insert_householder_one.name,
          status: toHouseholderStatus(data.insert_householder_one.status),
          fatherName: data.insert_householder_one.father_name,
          lastName: data.insert_householder_one.surename,
          nationality: data.insert_householder_one.nationality,
          religion: data.insert_householder_one.religion,
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
    mapper: toClient,
  });
}
