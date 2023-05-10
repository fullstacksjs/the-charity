import type { Gender } from './Gender';
import type { Nationality } from './Nationality';
import type { Religion } from './Religions';
import { Schema } from './Schema';

export const memberSchema = {
  name: () => Schema.name(),
  surname: () => Schema.surname().optionalString(),
  fatherName: () => Schema.name().optionalString(),
  nationalId: () => Schema.nationalId().optionalString(),
  gender: () => Schema.gender().optionalString(),
  nationality: () => Schema.nationality().optionalString(),
  dob: () => Schema.dob().optionalString(),
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
  nationality: Nationality;
  religion: Religion;
  gender: Gender;
}

interface DraftMember {
  name: string;
  status: 'draft';
  id: string;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  dob?: Date;
  nationality?: Nationality;
  religion?: Religion;
  gender?: Gender;
}

export type Member = CompletedMember | DraftMember;
