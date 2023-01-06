import { FamilySeverityEnum, FamilyStatusEnum } from '@camp/data-layer';

import type { ShortFamiliesInfo } from './toShortFamilyInfoTableRows';

export const shortFamiliesInfo: ShortFamiliesInfo = [
  {
    id: '(F00001)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Completed,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Critical,
    status: FamilyStatusEnum.Draft,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: FamilySeverityEnum.Normal,
    status: FamilyStatusEnum.Completed,
  },
];
