import type { Member } from '@camp/domain';

import type { ApiMember } from '../api';
import { toGender } from './toGender';
import { toMemberStatus } from './toMemberStatus';

export const toMember = (
  member: Omit<
    ApiMember,
    '__typename' | 'created_at' | 'family_id' | 'ssn' | 'updated_at'
  >,
): Member => {
  const status = toMemberStatus(member.status);

  if (status === 'draft')
    return {
      status,
      name: member.name,
      id: member.id,
      fatherName: member.father_name ?? undefined,
      surname: member.surname ?? undefined,
      nationalId: member.national_id ?? undefined,
      nationality: (member.nationality as 'ir' | null) ?? undefined,
      religion: (member.religion as 'islam' | null) ?? undefined,
      gender: member.gender == null ? undefined : toGender(member.gender),
      dob: member.dob == null ? undefined : new Date(member.dob),
    };
  return {
    status,
    name: member.name,
    id: member.id,
    fatherName: member.father_name!,
    surname: member.surname!,
    nationalId: member.national_id!,
    nationality: member.nationality as 'ir',
    gender: toGender(member.gender!),
    religion: member.religion as 'islam',
    dob: new Date(member.dob!),
  };
};
