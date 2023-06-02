import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type { Household } from '@camp/domain';

import type {
  ApiHouseholdListQuery,
  ApiHouseholdListQueryVariables,
} from '../../api';
import { useQuery } from '../../apiClient';
import { toInformationStatus, toSeverityStatus } from './useHouseholdQuery';

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
  families: HouseholdListItemDto[];
}

const toClient = (
  data: ApiHouseholdListQuery | null | undefined,
): HouseholdListDto => ({
  families:
    data?.household == null
      ? []
      : data.household.map(f => ({
          id: f.id,
          name: f.name,
          severityStatus: toSeverityStatus(f.severity),
          informationStatus: toInformationStatus(f.status),
        })),
});

export const useHouseholdListQuery = (
  options?: Apollo.QueryHookOptions<
    ApiHouseholdListQuery,
    ApiHouseholdListQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
