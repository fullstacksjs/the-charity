import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Household } from '@camp/domain';

import type { ApiHouseholdQuery, ApiHouseholdQueryVariables } from '../../api';
import { useQuery } from '../../apiClient';
import { toHousehold } from '../../mappers';

const Document = gql`
  query Household($id: uuid!) {
    household_by_pk(id: $id) {
      id
      name
      status
      severity
      code
    }
  }
`;

export interface HouseholdDto {
  household: Household;
}

const toClient = (
  data: ApiHouseholdQuery | null | undefined,
): HouseholdDto | null =>
  data?.household_by_pk == null
    ? null
    : {
        household: toHousehold(data.household_by_pk),
      };

export const useHouseholdQuery = (
  options: Apollo.QueryHookOptions<
    ApiHouseholdQuery,
    ApiHouseholdQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
