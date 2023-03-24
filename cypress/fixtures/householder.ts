import { generateMock } from '@anatine/zod-mock';
import { z } from 'zod';

import { householderIdentitySchema } from '../../libs/domain/Householder';

export const householderFixture = () =>
  generateMock(
    z.object({
      name: householderIdentitySchema.name(),
      surname: householderIdentitySchema.surname(),
      fatherName: householderIdentitySchema.fatherName(),
      nationalId: householderIdentitySchema.nationalId(),
      gender: householderIdentitySchema.gender(),
      nationality: householderIdentitySchema.nationality(),
      religion: householderIdentitySchema.religion(),
    }),
  );
