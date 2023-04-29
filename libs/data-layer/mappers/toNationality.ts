import { Nationality } from '@camp/domain';

import type { ApiNationalityEnum } from '../api';

export const toNationality = (_: ApiNationalityEnum): Nationality =>
  Nationality.Ir;
