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
  'id' | 'name' | 'severity' | 'status'
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
  order: number;
  name: string;
  id: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}
type ShortFamilyInfoTableRows = ShortFamilyInfoTableRow[];

export const toShortFamilyInfoTableRows = (
  infos: ShortFamiliesInfo,
): ShortFamilyInfoTableRows =>
  infos.map(({ id, name, severity, status }, index) => ({
    order: index + 1,
    id: id.replace(/\(|\)/g, ''),
    name,
    severityStatus: toSeverityStatus(severity),
    informationStatus: toInformationStatus(status),
  }));
