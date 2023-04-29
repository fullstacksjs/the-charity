import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';

import {
  City,
  Gender,
  householderSchema,
  Nationality,
  numberRegex,
  Religion,
} from '../../libs/domain';

export const householderFixture = () =>
  generateMock(
    z.object({
      name: householderSchema.name(),
      surname: z.string().trim().min(3).max(15),
      fatherName: z.string().trim().min(3).max(15),
      nationalId: z.string().min(10).max(12).regex(numberRegex).trim(),
      gender: z.union([z.literal(Gender.Male), z.literal(Gender.Female)]),
      nationality: z.literal(Nationality.Ir),
      religion: z.literal(Religion.Islam),
      city: z.literal(City.Tehran),
      issuedAt: z.literal(City.Tehran),
      dob: z.date().transform(d => d.toISOString()),
    }),
  );
