import type { CityEnum, GenderEnum, ReligionEnum } from './ApiSchema';
import { Schema } from './Schema';

export const memberSchema = {
  name: () => Schema.name(),
  surname: () => Schema.surname().optionalString(),
  fatherName: () => Schema.name().optionalString(),
  nationalId: () => Schema.nationalId().optionalString(),
  gender: () => Schema.gender().optionalString(),
  nationality: () => Schema.nationality().optionalString(),
  religion: () => Schema.religion().optionalString(),
};

export type MemberStatus = 'completed' | 'draft';

export interface Member {
  name: string;
  id: string;
  status: MemberStatus;
  surname?: string;
  gender?: GenderEnum;
  fatherName?: string;
  nationalId?: string;
  nationality?: string;
  religion?: ReligionEnum;
  cityOfBirth?: CityEnum;
  issuedAt?: CityEnum;
}
