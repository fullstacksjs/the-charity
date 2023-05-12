import { Gender } from '@camp/domain';

import { ApiGenderEnum } from '../api';

export const toGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male
    ? Gender.Male
    : gender === ApiGenderEnum.Female
    ? Gender.Female
    : Gender.Unknown;

export const toApiGender = (gender: Gender): ApiGenderEnum =>
  gender === Gender.Male
    ? ApiGenderEnum.Male
    : gender === Gender.Female
    ? ApiGenderEnum.Female
    : ApiGenderEnum.Unknown;
