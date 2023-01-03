import { FamilyStatusEnum } from '@camp/data-layer';
import type { BadgeStatus } from '@camp/design';
import { messages } from '@camp/messages';

export interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

export const toInformationStatus = (
  status: FamilyStatusEnum,
): InformationStatus => {
  return status === FamilyStatusEnum.Completed
    ? { text: messages.families.informationStatus.completed, state: 'success' }
    : { text: messages.families.informationStatus.draft, state: 'warning' };
};
