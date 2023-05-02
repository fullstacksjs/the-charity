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
import { Schema } from '../../libs/domain/Schema';

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
      dob: Schema.dob().transform(d => d.toISOString()),
    }),
    {
      stringMap: {
        name: () => faFaker.name.firstName().replace(/(\s|\u200c)/g, ''),
        surname: () => faFaker.name.lastName().replace(/(\s|\u200c)/g, ''),
        fatherName: () => faFaker.name.firstName().replace(/(\s|\u200c)/g, ''),
      },
    },
  );
