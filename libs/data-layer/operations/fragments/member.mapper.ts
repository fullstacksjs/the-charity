import type {
  ApiMemberKeysFragment,
  ApiMemberListItemFragment,
} from '@camp/data-layer';
import type { MemberKeys, MemberListItem, MemberStatus } from '@camp/domain';
import { MemberStatusEnum } from '@camp/domain';

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
    status: data.status as unknown as MemberStatus,
    name: data.name,
    isCompleted: data.status === MemberStatusEnum.Completed,
    surname: data.surname ?? undefined,
    fatherName: data.father_name ?? undefined,
    nationality: data.nationality ?? undefined,
    religion: data.religion ?? undefined,
    gender: data.gender ?? undefined,
    nationalId: data.national_id ?? undefined,
    dob: toDate(data.dob),
  };
};
