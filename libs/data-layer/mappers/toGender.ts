import { type Gender } from '@camp/domain';

import { ApiGenderEnum } from '../api';

export const toGender = (gender: ApiGenderEnum): Gender =>
  gender === ApiGenderEnum.Male ? 'male' : 'female';
