import type { CityEnum, ReligionEnum } from './ApiSchema';
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
  status: MemberStatus;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  nationality?: string;
  religion?: ReligionEnum;
  cityOfBirth?: CityEnum;
  issuedAt?: CityEnum;
}
