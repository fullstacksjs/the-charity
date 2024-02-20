import { z } from 'zod';

import type {
  AccommodationTypeEnum,
  CityEnum,
  GenderEnum,
  NationalityEnum,
  ProvinceEnum,
  ReligionEnum,
} from './ApiSchema';
import type { HouseholdKeys } from './Household';
import { Schema } from './Schema';

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
  healthDescription: () => z.string().optionalString(),
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
  healthDescription?: string;
  isContactCompleted: boolean;
}

export interface DraftHouseholder
  extends HouseholdKeys,
    HouseholderIdentity,
    HouseholderContact {
  status: HouseholderStatus.Draft;
}

export interface CompletedHouseholder
  extends HouseholdKeys,
    Required<HouseholderIdentity>,
    Required<HouseholderContact> {
  status: HouseholderStatus.Completed;
}

export type Householder = CompletedHouseholder | DraftHouseholder;
