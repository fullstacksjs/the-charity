import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';

import {
  cities,
  genders,
  householderSchema,
  nationalities,
  numberRegex,
  religions,
} from '../../libs/domain';

export const householderFixture = () =>
  generateMock(
    z.object({
      name: householderSchema.name(),
      surname: z.string().trim().min(3).max(15),
      fatherName: z.string().trim().min(3).max(15),
      nationalId: z.string().min(10).max(12).regex(numberRegex).trim(),
      gender: z.union([z.literal(genders[0]), z.literal(genders[1])]),
      nationality: z.literal(nationalities[0]),
      religion: z.literal(religions[0]),
      city: z.literal(cities[0]),
      issuedAt: z.literal(cities[0]),
      dob: z.date().transform(d => d.toISOString()),
    }),
  );
