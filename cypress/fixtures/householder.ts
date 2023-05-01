import { generateMock } from '@anatine/zod-mock';
import { faker as faFaker } from '@faker-js/faker/locale/fa';
import { z } from 'zod';

import {
  City,
  Gender,
  Nationality,
  numberRegex,
  Religion,
} from '../../libs/domain';

export const householderFixture = () =>
  generateMock(
    z.object({
      name: z.string().min(3).trim(),
      surname: z.string().trim().min(3).max(15),
      fatherName: z.string().trim().min(3).max(15),
      nationalId: z
        .string()
        .regex(numberRegex)
        .length(10)
        .trim()
        .transform(x => x.slice(0, 10)),
      gender: z.union([z.literal(Gender.Male), z.literal(Gender.Female)]),
      nationality: z.literal(Nationality.Ir),
      religion: z.literal(Religion.Islam),
      city: z.literal(City.Tehran),
      issuedAt: z.literal(City.Tehran),
      dob: z.date().transform(d => d.toISOString()),
    }),
    {
      stringMap: {
        name: () => faFaker.name.firstName(),
        surname: () => faFaker.name.lastName(),
        fatherName: () => faFaker.name.firstName(),
      },
    },
  );
