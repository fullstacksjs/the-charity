import type {
  ApiMemberKeysFragment,
  ApiMemberListItemFragment,
} from '@camp/data-layer';
import type { MemberKeys, MemberListItem } from '@camp/domain';
import { MemberStatus } from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getMemberKeys = (data: ApiMemberKeysFragment): MemberKeys => {
  return {
    id: data.id,
  };
};

export const getMemberListItem = (
  data: ApiMemberListItemFragment,
): MemberListItem => {
  return {
    id: data.id,
    status: data.status as unknown as MemberStatus,
    name: data.name,
    isCompleted: data.status === MemberStatus.Completed,
    surname: data.surname ?? undefined,
    fatherName: data.father_name ?? undefined,
    nationality: data.nationality ?? undefined,
    religion: data.religion ?? undefined,
    gender: data.gender ?? undefined,
    nationalId: data.national_id ?? undefined,
    dob: toDate(data.dob),
  };
};
