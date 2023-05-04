import type { City } from './City';
import type { Gender } from './Gender';
import type { Nationality } from './Nationality';
import type { Religion } from './Religions';
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
};

export type HouseholderStatus = 'completed' | 'draft';

interface CompletedHouseholder {
  name: string;
  status: 'completed';
  surname: string;
  fatherName: string;
  nationalId: string;
  dob: Date;
  nationality: Nationality;
  religion: Religion;
  cityOfBirth: City;
  gender: Gender;
}

interface DraftHouseholder {
  name: string;
  status: 'draft';
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date;
  nationality?: Nationality;
  religion?: Religion;
  cityOfBirth?: City;
  gender?: Gender;
}

export type Householder = CompletedHouseholder | DraftHouseholder;
