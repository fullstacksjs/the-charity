import type {
  ApiHouseholderContactFragment,
  ApiHouseholderFragment,
  ApiHouseholderIdentityFragment,
  ApiHouseholderKeysFragment,
} from '@camp/data-layer';
import type {
  HouseholderContact,
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
    healthDescription: data.health_description ?? undefined,
    isContactCompleted: false,
  };

  if (!hasNullish(config)) config.isContactCompleted = true;
  return config;
};

export const getHouseholder = (data: ApiHouseholderFragment) => ({
  ...getHouseholderContact(data),
  ...getHouseholderIdentity(data),
  status:
    data.status === 'Draft'
      ? HouseholderStatus.Draft
      : HouseholderStatus.Completed,
});
