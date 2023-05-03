import { messages } from '@camp/messages';
import { z } from 'zod';

import { City } from './City';
import { Gender } from './Gender';
import { Nationality } from './Nationality';
import { Religion } from './Religions';
import { Schema } from './Schema';

export const numberRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;

export const householderSchema = {
  name: () =>
    Schema.name().min(3, messages.householder.form.validation.nameMinLength),
  surname: () =>
    Schema.name()
      .min(3, messages.householder.form.validation.nameMinLength)
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  fatherName: () =>
    Schema.name()
      .min(3, messages.householder.form.validation.fatherNameMinLength)
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  nationalId: () =>
    z
      .string()
      .length(10, messages.householder.form.validation.nationalIdLength)
      .regex(
        numberRegex,
        messages.householder.form.validation.invalidNationalId,
      )
      .trim()
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  gender: () =>
    z
      .union([z.literal(Gender.Female), z.literal(Gender.Male)])
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  nationality: () =>
    z
      .literal(Nationality.Ir)
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  religion: () =>
    z
      .literal(Religion.Islam)
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  cityOfBirth: () =>
    z
      .literal(City.Tehran)
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  dob: () =>
    Schema.dob()
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
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
