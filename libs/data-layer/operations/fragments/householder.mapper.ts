import type {
  ApiHouseholderIdentityFragment,
  ApiHouseholderKeysFragment,
} from '@camp/data-layer';
import type { HouseholderIdentity, HouseholderKeys } from '@camp/domain';
import { HouseholderStatus } from '@camp/domain';

import { hasNullish } from './mapper.utils';
import { toDate } from './scalar.mapper';

export const getHouseholderKeys = (
  data: ApiHouseholderKeysFragment,
): HouseholderKeys => {
  return {
    id: data.id,
  };
};

export const getHouseholderIdentity = (
  data: ApiHouseholderIdentityFragment,
): HouseholderIdentity => {
  const config = {
    status: data.status as HouseholderStatus,
    name: data.name,
    surname: data.surname ?? undefined,
    fatherName: data.father_name ?? undefined,
    nationality: data.nationality ?? undefined,
    religion: data.religion ?? undefined,
    cityOfBirth: data.city ?? undefined,
    gender: data.gender ?? undefined,
    nationalId: data.national_id ?? undefined,
    dob: toDate(data.dob),
    isCompleted: data.status === HouseholderStatus.Completed,
    isIdentityCompleted: false,
  };

  if (!hasNullish(config)) config.isIdentityCompleted = true;

  return config;
};
