import { messages } from '@camp/messages';
import { z } from 'zod';

import { type City } from './City';
import { cities } from './City';
import { type Gender } from './Gender';
import { genders } from './Gender';
import { type Nationality } from './Nationality';
import { nationalities } from './Nationality';
import { type Religion } from './Religions';
import { religions } from './Religions';
import { Schema } from './Schema';

export const numberRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;

export const householderSchema = {
  name: () => Schema.name(),
  surname: () =>
    Schema.name()
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  fatherName: () =>
    Schema.name()
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
      .union([z.literal(genders[0]), z.literal(genders[1])])
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  nationality: () =>
    z
      .literal(nationalities[0])
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  religion: () =>
    z
      .literal(religions[0])
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  cityOfBirth: () =>
    z
      .literal(cities[0])
      .nullish()
      .or(z.literal(''))
      .transform(e => (e === '' || e == null ? undefined : e)),
  issuedAt: () =>
    z
      .literal(cities[0])
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
  issuedAt: City;
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
  issuedAt?: City;
}

export type Householder = CompletedHouseholder | DraftHouseholder;
