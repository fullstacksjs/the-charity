import { type Householder } from '../../domain';
import { type ApiHouseholder } from '../api';
import { toGender } from './toGender';
import { toHouseholderStatus } from './toHouseholderStatus';

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
      religion: (householder.religion as 'islam' | null) ?? undefined,
    };
  return {
    status,
    name: householder.name,
    fatherName: householder.father_name!,
    surname: householder.surname!,
    nationality: householder.nationality!,
    cityOfBirth: householder.city as 'tehran',
    gender: toGender(householder.gender!),
    issuedAt: householder.issued_at as 'tehran',
    religion: householder.religion as 'islam',
  };
};
