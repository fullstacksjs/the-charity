import type { HouseholderStatus } from '@camp/domain';

export const toHouseholderStatus = (status: string): HouseholderStatus =>
  status === 'Completed' ? 'completed' : 'draft';
