import type {
  ApiHouseholderContactFragment,
  ApiHouseholderFinancialFragment,
  ApiHouseholderHealthFragment,
  ApiHouseholderIdentityFragment,
  ApiHouseholderKeysFragment,
} from '@camp/data-layer';
import type {
  HouseholderContact,
  HouseholderFinancial,
  HouseholderHealth,
  HouseholderIdentity,
  HouseholderKeys,
  InsuranceEnum,
  SkillEnum,
  SubsideTypeEnum,
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
    insurances: (data.insurances ?? []) as InsuranceEnum[],
    isHealthCompleted: false,
  };

  if (!hasNullish(config)) config.isHealthCompleted = true;
  return config;
};

export const getHouseholderFinancial = (
  data: ApiHouseholderFinancialFragment,
): HouseholderFinancial => {
  const config: HouseholderFinancial = {
    job: data.job ?? undefined,
    income: data.income ?? undefined,
    skills: (data.skills ?? []) as SkillEnum[],
    subsideTypes: (data.subside_types ?? []) as SubsideTypeEnum[],
    subside: data.subside ?? undefined,
    rent: data.rent ?? undefined,
    bankCardNumber: data.bank_card_number ?? undefined,
    bankAccountNumber: data.bank_account_number ?? undefined,
    financialComment: data.financial_comment ?? undefined,
    isFinancialCompleted: false,
  };

  if (!hasNullish(config)) config.isFinancialCompleted = true;
  return config;
};

export const getHouseholder = (
  data: ApiHouseholderContactFragment &
    ApiHouseholderFinancialFragment &
    ApiHouseholderHealthFragment &
    ApiHouseholderIdentityFragment,
) => ({
  ...getHouseholderContact(data),
  ...getHouseholderHealth(data),
  ...getHouseholderIdentity(data),
  ...getHouseholderFinancial(data),
  status:
    data.status === 'Draft'
      ? HouseholderStatus.Draft
      : HouseholderStatus.Completed,
});
