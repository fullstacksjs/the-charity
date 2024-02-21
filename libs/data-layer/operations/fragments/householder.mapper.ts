import type {
  ApiHouseholderContactFragment,
  ApiHouseholderHealthFragment,
  ApiHouseholderIdentityFragment,
  ApiHouseholderKeysFragment,
} from '@camp/data-layer';
import type {
  HouseholderContact,
  HouseholderHealth,
  HouseholderIdentity,
  HouseholderKeys,
} from '@camp/domain';
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
    name: data.name,
    surname: data.surname ?? undefined,
    fatherName: data.father_name ?? undefined,
    religion: data.religion ?? undefined,
    gender: data.gender ?? undefined,
    nationalId: data.national_id ?? undefined,
    dob: toDate(data.dob),
    isCompleted: data.status === HouseholderStatus.Completed,
    isIdentityCompleted: false,
  };

  if (!hasNullish(config)) config.isIdentityCompleted = true;
  return config;
};

export const getHouseholderContact = (
  data: ApiHouseholderContactFragment,
): HouseholderContact => {
  const config: HouseholderContact = {
    province: data.province ?? undefined,
    nationality: data.nationality ?? undefined,
    cityOfBirth: data.city ?? undefined,
    accommodationType: data.accommodation_type ?? undefined,
    neighborhood: data.neighborhood ?? undefined,
    address: data.address ?? undefined,
    zipCode: data.zip_code ?? undefined,
    priorAccommodationAddress: data.prior_accommodation_address ?? undefined,
    isContactCompleted: false,
  };

  if (!hasNullish(config)) config.isContactCompleted = true;
  return config;
};

export const getHouseholderHealth = (
  data: ApiHouseholderHealthFragment,
): HouseholderHealth => {
  const config: HouseholderHealth = {
    addictionStatus: data.addiction_status ?? undefined,
    disabilityStatus: data.disability_status ?? undefined,
    disabilityDescription: data.disability_description ?? undefined,
    healthStatus: data.health_status ?? undefined,
    healthDescription: data.health_description ?? undefined,
    healthComment: data.health_comment ?? undefined,
    isHealthCompleted: false,
  };

  if (!hasNullish(config)) config.isHealthCompleted = true;
  return config;
};

export const getHouseholder = (
  data: ApiHouseholderContactFragment &
    ApiHouseholderHealthFragment &
    ApiHouseholderIdentityFragment,
) => ({
  ...getHouseholderContact(data),
  ...getHouseholderHealth(data),
  ...getHouseholderIdentity(data),
  status:
    data.status === 'Draft'
      ? HouseholderStatus.Draft
      : HouseholderStatus.Completed,
});
