import { Nationality } from '@camp/domain';

import { ApiNationalityEnum } from '../api';

export const toNationality = (_: ApiNationalityEnum): Nationality =>
  Nationality.Ir;

export const toApiNationality = (_: Nationality): ApiNationalityEnum =>
  ApiNationalityEnum.Ir;
