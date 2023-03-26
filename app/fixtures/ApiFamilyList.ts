import type { ApiFamilyListQuery } from '../../libs/data-layer/api';
import {
  ApiFamilySeverityEnum,
  ApiFamilyStatusEnum,
} from '../../libs/data-layer/api';

export const ApiFamilyList: ApiFamilyListQuery['family'] = [
  {
    id: '(F00001)',
    name: 'فول استک زاده',
    severity: ApiFamilySeverityEnum.Critical,
    status: ApiFamilyStatusEnum.Completed,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: ApiFamilySeverityEnum.Critical,
    status: ApiFamilyStatusEnum.Draft,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: ApiFamilySeverityEnum.Normal,
    status: ApiFamilyStatusEnum.Completed,
  },
];
