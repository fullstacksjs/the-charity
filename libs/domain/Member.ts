import type { CityEnum, GenderEnum, NationalityEnum, ReligionEnum } from './ApiSchema';
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

interface CompletedMember {
  name: string;
  status: 'completed';
  id: string;
  surname: string;
  fatherName: string;
  nationalId: string;
  dob: Date;
  nationality: NationalityEnum;
  religion: ReligionEnum;
  gender: GenderEnum;
}

interface DraftMember {
  name: string;
  status: 'draft';
  id: string;
  surname?: string;
  gender?: GenderEnum;
  fatherName?: string;
  nationalId?: string;
  nationality?: NationalityEnum;
  religion?: ReligionEnum;
  cityOfBirth?: CityEnum;
  issuedAt?: CityEnum;
}

export type Member = CompletedMember | DraftMember;
