import { messages } from '@camp/messages';
import { z } from 'zod';

import { type City } from './Country';
import { cities } from './Country';
import { genders } from './Gender';
import { type Religion } from './Religions';
import { religions } from './Religions';

const numberRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;

export const householderIdentitySchema = {
  firstName: () =>
    z
      .string()
      .trim()
      .min(
        3,
        messages.householder.householderIdentityForm.validation.nameMinLength,
      ),
  lastName: () =>
    z
      .string()
      .trim()
      .min(
        3,
        messages.householder.householderIdentityForm.validation.nameMinLength,
      )
      .optional(),
  fatherName: () =>
    z
      .string()
      .trim()
      .min(
        3,
        messages.householder.householderIdentityForm.validation
          .fatherNameMinLength,
      )
      .optional(),
  nationalId: () =>
    z
      .string()
      .min(
        10,
        messages.householder.householderIdentityForm.validation
          .nationalIdMinLength,
      )
      .regex(
        numberRegex,
        messages.householder.householderIdentityForm.validation
          .invalidNationalId,
      )
      .trim()
      .optional(),
  gender: () =>
    z.union([z.literal(genders[0]), z.literal(genders[1])]).optional(),
  nationality: () => z.string().trim().optional(),
  religion: () => z.literal(religions[0]).optional(),
  cityOfBirth: () => z.literal(cities[0]).optional(),
};

export type HouseholderStatus = 'completed' | 'draft';

export interface Householder {
  firstName: string;
  lastName: string;
  status: HouseholderStatus;
  fatherName: string;
  nationalId: string;
  name: string;
  nationality: string;
  religion: Religion;
  cityOfBirth: City;
}
