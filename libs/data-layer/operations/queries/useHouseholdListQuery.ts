import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Household } from '@camp/domain';

import type {
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '../../api';
import { useQuery } from '../../apiClient';
import { toHousehold } from '../../mappers';

const Document = gql`
  query HouseholdList {
    household {
      id
      name
      severity
      status
    }
  }
`;

export type HouseholdListItemDto = Pick<
  Household,
  'id' | 'informationStatus' | 'name' | 'severityStatus'
>;
export interface HouseholdListDto {
  households: HouseholdListItemDto[];
}

const toClient = (
  data: ApiHouseholdListQuery | null | undefined,
): HouseholdListDto => ({
  households:
    data?.household == null ? [] : data.household.map(h => toHousehold(h)),
});

export const useHouseholdListQuery = (
  options?: Apollo.QueryHookOptions<
    ApiHouseholdListQuery,
    ApiHouseholdListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
