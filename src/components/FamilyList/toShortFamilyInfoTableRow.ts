import type { CompletedFamily } from '@camp/data-layer';
import { FamilySeverity, FamilyStatus } from '@camp/data-layer';
import { messages } from '@camp/messages';

import type { BadgeStatus } from '../atoms';

const t = messages.families.list.table;

/* FIXME
  this type should be removed and replaced with
  apollo generated version of it in
  backend integration ticket of FamilyList
*/

export type ShortFamilyInfo = Pick<
  CompletedFamily,
  'name' | 'severity' | 'status'
>;
export type ShortFamiliesInfo = ShortFamilyInfo[];

interface SeverityStatus {
  text: string;
  state: BadgeStatus;
}

const toSeverityStatus = (severity: FamilySeverity): SeverityStatus => {
  return severity === FamilySeverity.Normal
    ? { text: t.rows.severityStatus.normal, state: 'warning' }
    : { text: t.rows.severityStatus.critical, state: 'error' };
};

interface InformationStatus {
  text: string;
  state: BadgeStatus;
}

const toInformationStatus = (status: FamilyStatus): InformationStatus => {
  return status === FamilyStatus.Completed
    ? { text: t.rows.informationStatus.completed, state: 'success' }
    : { text: t.rows.informationStatus.draft, state: 'warning' };
};

export interface ShortFamilyInfoTableRow {
  name: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}

export const toShortFamilyInfoTableRow = ({
  name,
  severity,
  status,
}: ShortFamilyInfo) => ({
  name,
  severityStatus: toSeverityStatus(severity),
  informationStatus: toInformationStatus(status),
});
