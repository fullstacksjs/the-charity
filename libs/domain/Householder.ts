import { z } from 'zod';

import { toZodLiteralList } from '../zod-addons';
import { AddictionStatus } from './AddictionStatus';
import type {
  AccommodationTypeEnum,
  AddictionStatusEnum,
  CityEnum,
  DisabilityStatusEnum,
  GenderEnum,
  HealthStatusEnum,
  JobEnum,
  NationalityEnum,
  ProvinceEnum,
  ReligionEnum,
} from './ApiSchema';
import { DisabilityStatus } from './DisabilityStatus';
import { HealthStatus } from './HealthStatus';
import type { HouseholdKeys } from './Household';
import type { InsuranceEnum } from './Insurance';
import { insurances } from './Insurance';
import { jobs } from './Job';
import { Schema } from './Schema';
import type { SkillEnum } from './Skill';
import { skills } from './Skill';
import type { SubsideTypeEnum } from './SubsideType';
import { subsideTypes } from './SubsideType';

export const householderIdentitySchema = {
  name: () => Schema.name(),
  surname: () => Schema.surname().optionalString(),
  fatherName: () => Schema.name().optionalString(),
  nationalId: () => Schema.nationalId().optionalString(),
  gender: () => Schema.gender().optionalString(),
  religion: () => Schema.religion().optionalString(),
  dob: () => Schema.dob().optionalString(),
  membersCount: () => Schema.membersCount(),
};

export enum HouseholderStatus {
  Completed = 'Completed',
  Draft = 'Draft',
}

export interface HouseholderKeys {
  id: string;
}

export interface HouseholderIdentity {
  name: string;
  surname?: string;
  fatherName?: string;
  religion?: ReligionEnum;
  nationalId?: string;
  dob?: Date;
  gender?: GenderEnum;
  isCompleted: boolean;
  isIdentityCompleted: boolean;
}

export const householderContactSchema = {
  province: () => Schema.province().optionalString(),
  cityOfBirth: () => Schema.city().optionalString(),
  neighborhood: () => Schema.neighborhood().optionalString(),
  address: () => Schema.address().optionalString(),
  zipCode: () => Schema.zipCode().optionalString(),
  nationality: () => Schema.nationality().optionalString(),
  priorAccommodationAddress: () =>
    Schema.priorAccommodationAddress().optionalString(),
  accommodationType: () => Schema.accommodationType().optionalString(),
};

export interface HouseholderContact {
  province?: ProvinceEnum;
  nationality?: NationalityEnum;
  cityOfBirth?: CityEnum;
  accommodationType?: AccommodationTypeEnum;
  neighborhood?: string;
  address?: string;
  zipCode?: string;
  priorAccommodationAddress?: string;
  isContactCompleted: boolean;
}

export const householderHealthSchema = {
  healthDescription: () => z.string().optionalString(),
  addictionStatus: () =>
    z.union(toZodLiteralList(AddictionStatus)).optionalString(),
  disabilityStatus: () =>
    z.union(toZodLiteralList(DisabilityStatus)).optionalString(),
  disabilityDescription: () => z.string().optionalString(),
  insurances: () => z.array(z.union(toZodLiteralList(insurances))).default([]),
  healthStatus: () => z.union(toZodLiteralList(HealthStatus)).optionalString(),
  healthComment: () => z.string().optionalString(),
};

export interface HouseholderHealth {
  addictionStatus?: AddictionStatusEnum;
  disabilityStatus?: DisabilityStatusEnum;
  disabilityDescription?: string;
  healthStatus?: HealthStatusEnum;
  healthComment?: string;
  healthDescription?: string;
  insurances?: InsuranceEnum[];
  isHealthCompleted: boolean;
}

export const householderFinancialSchema = {
  job: () => z.union(toZodLiteralList(jobs)).optionalString(),
  income: () => z.string().optionalString(),
  skills: () => z.array(z.union(toZodLiteralList(skills))).default([]),
  subsideTypes: () =>
    z.array(z.union(toZodLiteralList(subsideTypes))).default([]),
  subside: () => z.string().optionalString(),
  rent: () => z.string().optionalString(),
  bankCardNumber: () => z.number().optional(),
  bankAccountNumber: () => z.number().optional(),
  financialComment: () => z.string().optionalString(),
};

export interface HouseholderFinancial {
  job?: JobEnum;
  income?: number;
  skills?: SkillEnum[];
  subsideTypes?: SubsideTypeEnum[];
  subside?: number;
  rent?: string;
  bankCardNumber?: string;
  bankAccountNumber?: string;
  financialComment?: string;
  isFinancialCompleted: boolean;
}

export interface DraftHouseholder
  extends HouseholdKeys,
    HouseholderIdentity,
    HouseholderContact,
    HouseholderHealth,
    HouseholderFinancial {
  status: HouseholderStatus.Draft;
}

export interface CompletedHouseholder
  extends HouseholdKeys,
    Required<HouseholderIdentity>,
    Required<HouseholderContact>,
    Required<HouseholderHealth>,
    Required<HouseholderFinancial> {
  status: HouseholderStatus.Completed;
}

export type Householder = CompletedHouseholder | DraftHouseholder;
