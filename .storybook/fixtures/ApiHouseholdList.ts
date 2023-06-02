import type { ApiHouseholdListQuery } from '../../libs/data-layer/api';
import {
  ApiHouseholdSeverityEnum,
  ApiHouseholdStatusEnum,
} from '../../libs/data-layer/api';

export const ApiHouseholdList: ApiHouseholdListQuery['household'] = [
  {
    id: '(F00001)',
    name: 'فول استک زاده',
    severity: ApiHouseholdSeverityEnum.Critical,
    status: ApiHouseholdStatusEnum.Completed,
  },
  {
    id: '(F00002)',
    name: 'فول استک زاده',
    severity: ApiHouseholdSeverityEnum.Critical,
    status: ApiHouseholdStatusEnum.Draft,
  },
  {
    id: '(F00003)',
    name: 'فول استک زاده',
    severity: ApiHouseholdSeverityEnum.Normal,
    status: ApiHouseholdStatusEnum.Completed,
  },
];
