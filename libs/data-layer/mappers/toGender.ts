import type { Gender } from '@camp/domain';

import { ApiGenderEnum } from '../api';

export const toGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';

export const toApiGender = (gender: Gender): ApiGenderEnum =>
  gender === 'male' ? ApiGenderEnum.Male : ApiGenderEnum.Female;
