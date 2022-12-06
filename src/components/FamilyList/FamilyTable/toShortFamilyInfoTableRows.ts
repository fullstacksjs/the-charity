import type { Family } from '@camp/data-layer';
import { messages } from '@camp/messages';

import type { InformationStatus } from './InformationStatus';
import { toInformationStatus } from './InformationStatus';
import type { SeverityStatus } from './SeverityStatus';
import { toSeverityStatus } from './SeverityStatus';

export const t = messages.families.list.table;

/* FIXME
  this type should be removed and replaced with
  apollo generated version of it in
  backend integration ticket of FamilyList
*/
export type ShortFamilyInfo = Pick<
  Family,
  'id' | 'name' | 'severity' | 'status'
>;
export type ShortFamiliesInfo = ShortFamilyInfo[];

export interface ShortFamilyInfoTableRow {
  order: number;
  name: string;
  id: string;
  severityStatus: SeverityStatus;
  informationStatus: InformationStatus;
}
export type ShortFamilyInfoTableRows = ShortFamilyInfoTableRow[];

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
