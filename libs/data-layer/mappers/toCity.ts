import { type City } from '@camp/domain';
import { cities } from '@camp/domain';

import { type ApiCityEnum } from '../api';

export const toCity = (_: ApiCityEnum): City => cities[0];
