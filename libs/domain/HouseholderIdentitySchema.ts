import type {
  CityEnum,
  GenderEnum,
  NationalityEnum,
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
  nationality: () => Schema.nationality().optionalString(),
  religion: () => Schema.religion().optionalString(),
  cityOfBirth: () => Schema.cityOfBirth().optionalString(),
  dob: () => Schema.dob().optionalString(),
  membersCount: () => Schema.membersCount(),
};

export enum HouseholderStatus {
  Completed = 'Completed',
  Draft = 'Draft',
}

export interface DraftHouseholder extends HouseholdKeys, HouseholderIdentity {
  status: HouseholderStatus.Draft;
}

export interface CompletedHouseholder
  extends HouseholdKeys,
    Required<HouseholderIdentity> {
  status: HouseholderStatus.Completed;
}

export type Householder = CompletedHouseholder | DraftHouseholder;

export interface HouseholderKeys {
  id: string;
}

export interface HouseholderIdentity {
  name: string;
  surname?: string;
  fatherName?: string;
  nationality?: NationalityEnum;
  religion?: ReligionEnum;
  nationalId?: string;
  dob?: Date;
  cityOfBirth?: CityEnum;
  gender?: GenderEnum;
  isCompleted: boolean;
  isIdentityCompleted: boolean;
}
