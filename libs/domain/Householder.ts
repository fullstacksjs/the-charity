import type {
  CityEnum,
  GenderEnum,
  NationalityEnum,
  ReligionEnum,
} from './ApiSchema';
import { Schema } from './Schema';

export const householderSchema = {
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

export interface DraftHouseholder {
  status: HouseholderStatus.Draft;
  id: string;
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
}

export interface CompletedHouseholder
  extends Omit<Required<DraftHouseholder>, 'status'> {
  status: HouseholderStatus.Completed;
}

export type Householder = CompletedHouseholder | DraftHouseholder;

export type HouseholderKeys = Pick<Householder, 'id'>;

export type HouseholderIdentity = Pick<
  Householder,
  | 'cityOfBirth'
  | 'dob'
  | 'fatherName'
  | 'gender'
  | 'isCompleted'
  | 'name'
  | 'nationalId'
  | 'nationality'
  | 'religion'
  | 'status'
  | 'surname'
>;
