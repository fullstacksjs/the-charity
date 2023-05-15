import { messages } from '@camp/messages';
import { z } from 'zod';

import { City } from './City';
import { Gender } from './Gender';
import { Nationality } from './Nationality';
import { Religion } from './Religions';

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
  gender: () => z.union([z.literal(Gender.Female), z.literal(Gender.Male)]),
  nationality: () => z.literal(Nationality.Ir),
  religion: () => z.literal(Religion.Islam),
  cityOfBirth: () => z.literal(City.Tehran),
};
