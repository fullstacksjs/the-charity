import { messages } from '@camp/messages';
import { z } from 'zod';

import { toZodLiteralList } from '../zod-addons';
import { cities } from './City';
import { genders } from './Gender';
import { nationalities } from './Nationality';
import { religions } from './Religions';

export const digitsRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;
export const nameRegex =
  /^[ \u0621-\u063A\u0641-\u064A\u067E\u0686\u0698\u06AF\u06A9\u06CC]+$/;

export const Schema = {
  dob: () => z.date().max(new Date(), { message: messages.validation.dob.max }),
  name: () =>
    z
      .string()
      .regex(nameRegex, { message: messages.validation.name.invalid })
      .min(3, messages.validation.name.minLength)
      .trim(),
  surname: () =>
    z
      .string()
      .regex(nameRegex, { message: messages.validation.name.invalid })
      .min(3, messages.validation.surname.minLength)
      .trim(),
  nationalId: () =>
    z
      .string()
      .regex(digitsRegex, messages.validation.nationalId.invalid)
      .length(10, messages.validation.nationalId.length)
      .trim(),
  gender: () => z.union(toZodLiteralList(genders)),
  nationality: () => z.union(toZodLiteralList(nationalities)),
  religion: () => z.union(toZodLiteralList(religions)),
  cityOfBirth: () => z.union(toZodLiteralList(cities)),
  membersCount: () => z.number(),
};
