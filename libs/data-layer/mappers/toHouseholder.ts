import { type Householder } from '@camp/domain';

import { type ApiHouseholder } from '../api';
import { toCity } from './toCity';
import { toGender } from './toGender';
import { toHouseholderStatus } from './toHouseholderStatus';
import { toReligion } from './toReligion';

export const toHouseholder = (
  householder: Omit<
    ApiHouseholder,
    '__typename' | 'created_at' | 'family_id' | 'id' | 'ssn' | 'updated_at'
  >,
): Householder => {
  const status = toHouseholderStatus(householder.status);

  if (status === 'draft')
    return {
      status,
      name: householder.name,
      fatherName: householder.father_name ?? undefined,
      surname: householder.surname ?? undefined,
      nationality: householder.nationality ?? undefined,
      religion:
        householder.religion == null
          ? undefined
          : toReligion(householder.religion),
      gender:
        householder.gender == null ? undefined : toGender(householder.gender),
      issuedAt:
        householder.issued_at == null
          ? undefined
          : toCity(householder.issued_at),
      cityOfBirth:
        householder.city == null ? undefined : toCity(householder.city),
      nationalId: householder.national_id ?? undefined,
    };
  return {
    status,
    name: householder.name,
    fatherName: householder.father_name!,
    surname: householder.surname!,
    nationalId: householder.national_id!,
    nationality: householder.nationality!,
    cityOfBirth: toCity(householder.city!),
    gender: toGender(householder.gender!),
    issuedAt: toCity(householder.issued_at!),
    religion: toReligion(householder.religion!),
  };
};
