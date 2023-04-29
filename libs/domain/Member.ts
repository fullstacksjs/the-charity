import { messages } from '@camp/messages';
import { z } from 'zod';

import type { City } from './City';
import { Gender } from './Gender';
import type { Religion } from './Religions';
import { religions } from './Religions';

const numberRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;

export const memberSchema = {
  name: () =>
    z
      .string()
      .trim()
      .min(3, messages.member.createForm.validation.nameMinLength),
  surname: () =>
    z
      .string()
      .trim()
      .min(3, messages.member.createForm.validation.nameMinLength)
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
  fatherName: () =>
    z
      .string()
      .trim()
      .min(3, messages.member.createForm.validation.fatherNameMinLength)
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
  nationalId: () =>
    z
      .string()
      .min(10, messages.member.createForm.validation.nationalIdMinLength)
      .regex(
        numberRegex,
        messages.member.createForm.validation.invalidNationalId,
      )
      .trim()
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
  gender: () =>
    z
      .union([z.literal(Gender.Male), z.literal(Gender.Female)])
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
  nationality: () =>
    z
      .string()
      .trim()
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
  religion: () =>
    z
      .literal(religions[0])
      .optional()
      .or(z.literal(''))
      .transform(e => (e === '' ? undefined : e)),
};

export type MemberStatus = 'completed' | 'draft';

export interface Member {
  name: string;
  status: MemberStatus;
  surname?: string;
  fatherName?: string;
  nationalId?: string;
  nationality?: string;
  religion?: Religion;
  cityOfBirth?: City;
  issuedAt?: City;
}
