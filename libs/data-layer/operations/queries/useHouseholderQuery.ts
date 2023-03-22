import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { type Householder } from '@camp/domain';

import {
  type ApiHouseholderQuery,
  type ApiHouseholderQueryVariables,
} from '../../api';
import { toGender, toHouseholderStatus } from '../mutations';
import { useQuery } from './useQuery';

const Document = gql`
  query Householder($family_id: uuid!) {
    householder_by_pk(family_id: $family_id) {
      name
      family_id
      father_name
      issued_at
      surname
      nationality
      religion
      city
      gender
      status
    }
  }
`;

export interface HouseholderDto {
  householder: Householder;
}

const toClient = (
  data: ApiHouseholderQuery | null | undefined,
): HouseholderDto | null =>
  data?.householder_by_pk == null
    ? null
    : {
        householder: {
          name: data.householder_by_pk.name,
          status: toHouseholderStatus(data.householder_by_pk.status),
          surname: data.householder_by_pk.surname ?? undefined,
          fatherName: data.householder_by_pk.father_name ?? undefined,
          nationality: data.householder_by_pk.nationality ?? undefined,
          religion:
            (data.householder_by_pk.religion as 'islam' | null) ?? undefined,
          cityOfBirth:
            (data.householder_by_pk.city as 'tehran' | null) ?? undefined,
          issuedAt:
            (data.householder_by_pk.issued_at as 'tehran' | null) ?? undefined,
          gender:
            data.householder_by_pk.gender == null
              ? undefined
              : toGender(data.householder_by_pk.gender),
        },
      };

export const useHouseholderQuery = (
  options: Apollo.QueryHookOptions<
    ApiHouseholderQuery,
    ApiHouseholderQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
