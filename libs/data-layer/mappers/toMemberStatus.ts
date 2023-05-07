import type { MemberStatus } from '@camp/domain';

import { ApiMemberStatusEnum } from '../api';

export const toMemberStatus = (status: ApiMemberStatusEnum): MemberStatus =>
  status === ApiMemberStatusEnum.Completed ? 'completed' : 'draft';
