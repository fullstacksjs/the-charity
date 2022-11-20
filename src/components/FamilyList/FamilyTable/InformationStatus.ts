import { FamilyStatus } from '@camp/data-layer';
import { messages } from '@camp/messages';

import type { BadgeStatus } from '../../atoms';

export interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

export const toInformationStatus = (
  status: FamilyStatus,
): InformationStatus => {
  return status === FamilyStatus.Completed
    ? { text: messages.families.informationStatus.completed, state: 'success' }
    : { text: messages.families.informationStatus.draft, state: 'warning' };
};
