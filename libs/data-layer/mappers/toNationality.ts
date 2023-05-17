import { Nationality } from '@camp/domain';

import { ApiNationalityEnum } from '../api';

export const toNationality = (nationality: ApiNationalityEnum): Nationality =>
  nationality === ApiNationalityEnum.Ir ? Nationality.Ir : Nationality.Unknown;

export const toApiNationality = (
  nationality: Nationality,
): ApiNationalityEnum =>
  nationality === Nationality.Ir
    ? ApiNationalityEnum.Ir
    : ApiNationalityEnum.Unknown;
