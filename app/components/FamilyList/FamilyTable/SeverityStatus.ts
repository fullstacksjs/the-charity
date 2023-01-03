import { FamilySeverityEnum } from '@camp/data-layer';
import type { BadgeStatus } from '@camp/design';
import { messages } from '@camp/messages';

export interface SeverityStatus {
  text: string;
  state: BadgeStatus;
}

export const toSeverityStatus = (
  severity: FamilySeverityEnum,
): SeverityStatus => {
  return severity === FamilySeverityEnum.Normal
    ? { text: messages.families.severityStatus.normal, state: 'warning' }
    : { text: messages.families.severityStatus.critical, state: 'error' };
};
