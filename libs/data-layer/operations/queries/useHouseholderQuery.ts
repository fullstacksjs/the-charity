import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { type Householder } from '@camp/domain';

import {
  type ApiHouseholderQuery,
  type ApiHouseholderQueryVariables,
} from '../../api';
import { toHouseholder } from '../../mappers';
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
): HouseholderDto | null => {
  const householder = data?.householder_by_pk;
  if (householder == null) return null;
  return { householder: toHouseholder(householder) };
};
export const useHouseholderQuery = (
  options: Apollo.QueryHookOptions<
    ApiHouseholderQuery,
    ApiHouseholderQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
