import { type Nationality } from '@camp/domain';
import { nationalities } from '@camp/domain';

import { type ApiNationalityEnum } from '../api';

export const toNationality = (_: ApiNationalityEnum): Nationality =>
  nationalities[0];
