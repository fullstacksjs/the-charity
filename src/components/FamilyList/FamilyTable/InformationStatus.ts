import { FamilyStatusEnum } from '@camp/data-layer';
import { messages } from '@camp/messages';

import type { BadgeStatus } from '../../atoms';

export interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

export const toInformationStatus = (
  status: FamilyStatusEnum,
): InformationStatus => {
  return status === FamilyStatusEnum.COMPLETED
    ? { text: messages.families.informationStatus.completed, state: 'success' }
    : { text: messages.families.informationStatus.draft, state: 'warning' };
};
