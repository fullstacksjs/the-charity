import type {
  CityEnum,
  GenderEnum,
  NationalityEnum,
  ReligionEnum,
} from './ApiSchema';
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

export enum MemberStatus {
  Completed = 'Completed',
  Draft = 'Draft',
}

export interface CompletedMember extends Omit<Required<DraftMember>, 'status'> {
  status: MemberStatus.Completed;
}

interface DraftMember {
  name: string;
  status: MemberStatus.Draft;
  id: string;
  surname?: string;
  gender?: GenderEnum;
  fatherName?: string;
  nationalId?: string;
  nationality?: NationalityEnum;
  religion?: ReligionEnum;
  cityOfBirth?: CityEnum;
  issuedAt?: CityEnum;
  dob?: Date;
  isCompleted: boolean;
}

export type Member = CompletedMember | DraftMember;

export type MemberKeys = Pick<Member, 'id'>;

export type MemberListItem = Pick<
  Member,
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
