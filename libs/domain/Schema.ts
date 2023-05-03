import { messages } from '@camp/messages';
import { z } from 'zod';

import { City } from './City';
import { Gender } from './Gender';
import { Nationality } from './Nationality';
import { Religion } from './Religions';

export const digitsRegex = /^[0-9]*[\u0660-\u0669\u06F0-\u06F90-9]*$/;

export const Schema = {
  dob: () => z.date().max(new Date(), { message: messages.validation.dob.max }),
  name: () =>
    z
      .string()
      .regex(
        /^[ \u0600-\u06FF\u0750-\u077F\uFB50-\uFBC2\uFBD3-\uFD3D\uFD50-\uFDCF\uFDF0-\uFE4F\uFE70-\uFEFF]+$/,
        { message: messages.validation.name.invalid },
      )
      .min(3, messages.validation.name.minLength)
      .trim(),
  surname: () =>
    z
      .string()
      .regex(
        /^[ \u0600-\u06FF\u0750-\u077F\uFB50-\uFBC2\uFBD3-\uFD3D\uFD50-\uFDCF\uFDF0-\uFE4F\uFE70-\uFEFF]+$/,
        { message: messages.validation.name.invalid },
      )
      .min(3, messages.validation.surname.minLength)
      .trim(),
  nationalId: () =>
    z
      .string()
      .length(10, messages.validation.nationalId.length)
      .regex(digitsRegex, messages.validation.nationalId.invalid)
      .trim(),
  gender: () => z.union([z.literal(Gender.Female), z.literal(Gender.Male)]),
  nationality: () => z.literal(Nationality.Ir),
  religion: () => z.literal(Religion.Islam),
  cityOfBirth: () => z.literal(City.Tehran),
};
