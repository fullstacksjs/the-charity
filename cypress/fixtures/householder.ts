import '../../libs/zod-addons/monkeyPatchZod';

import { generateMock } from '@anatine/zod-mock';
import { faker as faFaker } from '@faker-js/faker/locale/fa';
import { z } from 'zod';

import { householderSchema } from '../../libs/domain';
import { Schema } from '../../libs/domain/Schema';

export const householderFixture = () =>
  generateMock(
    z.object({
      name: z.string().min(3),
      surname: z.string().min(3),
      fatherName: z.string().min(3),
      nationalId: Schema.nationalId().transform(x => x.slice(0, 10)),
      gender: Schema.gender(),
      nationality: householderSchema.nationality(),
      religion: Schema.religion(),
      city: Schema.cityOfBirth(),
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
