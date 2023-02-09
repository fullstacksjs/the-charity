import { messages } from '@camp/messages';
import { z } from 'zod';

const numberRegex = /^[\u0660-\u0669\u06F0-\u06F90-9]/;

export const HouseholderIdentitySchema = {
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
      ),
  fatherName: () =>
    z
      .string()
      .trim()
      .min(
        3,
        messages.householder.householderIdentityForm.validation
          .fatherNameMinLength,
      ),
  nationalId: () =>
    z
      .string()
      .min(
        10,
        messages.householder.householderIdentityForm.validation
          .nationalIdLength,
      )
      .regex(
        numberRegex,
        messages.householder.householderIdentityForm.validation
          .inValidNationalId,
      )
      .trim(),
  ssn: () =>
    z
      .string()
      .min(8, messages.householder.householderIdentityForm.validation.ssnLength)
      .regex(
        numberRegex,
        messages.householder.householderIdentityForm.validation.inValidSsn,
      )
      .trim(),
};
