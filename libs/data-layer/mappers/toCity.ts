import { City } from '@camp/domain';

import { ApiCityEnum } from '../api';

export const toCity = (_: ApiCityEnum): City => City.Tehran;

export const toApiCity = (_: City): ApiCityEnum => ApiCityEnum.Tehran;
