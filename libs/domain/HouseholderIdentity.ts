import { messages } from '@camp/messages';
import { z } from 'zod';

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
  gender: () => z.union([z.literal('male'), z.literal('female')]).optional(),
  nationality: () => z.string().trim().optional(),
  religion: () => z.literal('islam').optional(),
};

export const genders = ['male', 'female'] as const;
export const religions = ['islam'] as const;
export type HouseholderStatus = 'completed' | 'draft';

export interface Householder {
  firstName: string;
  lastName: string;
  status: HouseholderStatus;
  fatherName: string;
  nationalId: string;
  name: string;
  nationality: string;
  religion: string;
}
