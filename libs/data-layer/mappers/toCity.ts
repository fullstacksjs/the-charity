import { City } from '@camp/domain';

import type { ApiCityEnum } from '../api';

export const toCity = (_: ApiCityEnum): City => City.Tehran;
