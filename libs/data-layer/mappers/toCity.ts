import { City } from '@camp/domain';

import { ApiCityEnum } from '../api';

export const toCity = (city: ApiCityEnum): City =>
  city === ApiCityEnum.Tehran ? City.Tehran : City.Unknown;

export const toApiCity = (city: City): ApiCityEnum =>
  city === City.Tehran ? ApiCityEnum.Tehran : ApiCityEnum.Unknown;
