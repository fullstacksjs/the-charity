import type { City } from './City';
import type { Gender } from './Gender';
import type { Religion } from './Religions';
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
  gender?: Gender;
  fatherName?: string;
  nationalId?: string;
  nationality?: string;
  religion?: Religion;
  cityOfBirth?: City;
  issuedAt?: City;
}
