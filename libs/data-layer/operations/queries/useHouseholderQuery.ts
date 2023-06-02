import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Householder } from '@camp/domain';

import type {
  ApiHouseholderQuery,
  ApiHouseholderQueryVariables,
} from '../../api';
import { useQuery } from '../../apiClient';
import { toHouseholder } from '../../mappers';

const Document = gql`
  query Householder($household_id: uuid!) {
    householder_by_pk(household_id: $household_id) {
      name
      father_name
      surname
      nationality
      religion
      city
      gender
      status
      national_id
      dob
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
