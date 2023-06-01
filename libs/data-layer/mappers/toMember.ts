import type { Member } from '@camp/domain';

import type { ApiMember } from '../api';
import { toGender } from './toGender';
import { toMemberStatus } from './toMemberStatus';
import { toNationality } from './toNationality';
import { toReligion } from './toReligion';

export const toMember = (
  member: Omit<
    ApiMember,
    | '__typename'
    | 'created_at'
    | 'household_id'
    | 'member_household'
    | 'updated_at'
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
      nationality:
        member.nationality == null
          ? undefined
          : toNationality(member.nationality),
      religion:
        member.religion == null ? undefined : toReligion(member.religion),
      gender: member.gender == null ? undefined : toGender(member.gender),

      nationalId: member.national_id ?? undefined,
      dob: member.dob == null ? undefined : new Date(member.dob),
    };
  return {
    status,
    name: member.name,
    id: member.id,
    fatherName: member.father_name!,
    surname: member.surname!,
    nationalId: member.national_id!,
    nationality: toNationality(member.nationality!),
    gender: toGender(member.gender!),
    religion: toReligion(member.religion!),
    dob: new Date(member.dob!),
  };
};
