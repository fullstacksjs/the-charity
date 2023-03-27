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
      dob: householderIdentitySchema
        .dob()
        .transform(d => (d != null ? d.toISOString() : d)),
      city: householderIdentitySchema.cityOfBirth(),
      issuedAt: householderIdentitySchema.issuedAt(),
    }),
  );
