import type * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import type {
  Household,
  InformationStatus,
  SeverityStatus,
} from '@camp/domain';

import type { ApiHouseholdQuery, ApiHouseholdQueryVariables } from '../../api';
import { ApiHouseholdSeverityEnum, ApiHouseholdStatusEnum } from '../../api';
import { useQuery } from '../../apiClient';

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

export const toSeverityStatus = (
  severity: ApiHouseholdSeverityEnum,
): SeverityStatus =>
  severity === ApiHouseholdSeverityEnum.Normal ? 'normal' : 'critical';

export const toInformationStatus = (
  info: ApiHouseholdStatusEnum,
): InformationStatus =>
  info === ApiHouseholdStatusEnum.Completed ? 'completed' : 'draft';

const toClient = (
  data: ApiHouseholdQuery | null | undefined,
): HouseholdDto | null =>
  data?.household_by_pk == null
    ? null
    : {
        household: {
          id: data.household_by_pk.id,
          name: data.household_by_pk.name,
          code: data.household_by_pk.code ?? '',
          severityStatus: toSeverityStatus(data.household_by_pk.severity),
          informationStatus: toInformationStatus(data.household_by_pk.status),
        },
      };

export const useHouseholdQuery = (
  options: Apollo.QueryHookOptions<
    ApiHouseholdQuery,
    ApiHouseholdQueryVariables
  >,
) => useQuery(Document, { ...options, mapper: toClient });
