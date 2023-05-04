import type { HouseholderStatus } from '@camp/domain';

import { ApiHouseholderStatusEnum } from '../api';

export const toHouseholderStatus = (
  status: ApiHouseholderStatusEnum,
): HouseholderStatus =>
  status === ApiHouseholderStatusEnum.Completed ? 'completed' : 'draft';
