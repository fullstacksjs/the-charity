import type {
  ApiHouseholdDetailFragment,
  ApiHouseholdKeysFragment,
  ApiHouseholdListItemFragment,
} from '@camp/data-layer';
import type {
  HouseholdDetail,
  HouseholdKeys,
  HouseholdListItem,
} from '@camp/domain';
import { HouseholdStatusEnum } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getHouseholdKeys = (
  data: ApiHouseholdKeysFragment,
): HouseholdKeys => {
  return {
    id: data.id,
  };
};

export const getHouseholdDetail = (
  data: ApiHouseholdDetailFragment,
): HouseholdDetail => {
  return {
    name: data.name,
    code: data.code!,
    status: data.status,
    severity: data.severity,
    createdAt: toDate(data.created_at)!,
    updatedAt: toDate(data.updated_at)!,
    isCompleted: data.status === HouseholdStatusEnum.Completed,
  };
};

export const getHouseholdListItem = (
  data: ApiHouseholdListItemFragment,
): HouseholdListItem => {
  return {
    name: data.name,
    status: data.status,
    severity: data.severity,
    isCompleted: data.status === HouseholdStatusEnum.Completed,
  };
};
