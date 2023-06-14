import type {
  Household,
  InformationStatus,
  SeverityStatus,
} from '@camp/domain';

import type { ApiHousehold } from '../api';
import { ApiHouseholdSeverityEnum, ApiHouseholdStatusEnum } from '../api';

export const toSeverityStatus = (
  severity: ApiHouseholdSeverityEnum,
): SeverityStatus =>
  severity === ApiHouseholdSeverityEnum.Normal ? 'normal' : 'critical';

export const toInformationStatus = (
  info: ApiHouseholdStatusEnum,
): InformationStatus =>
  info === ApiHouseholdStatusEnum.Completed ? 'completed' : 'draft';

export const toHousehold = (
  household: Omit<
    ApiHousehold,
    '__typename' | 'created_at' | 'db_code' | 'updated_at'
  >,
): Household => {
  return {
    id: household.id,
    name: household.name,
    code: household.code ?? '',
    severityStatus: toSeverityStatus(household.severity),
    informationStatus: toInformationStatus(household.status),
  };
};
