import { Religion } from '@camp/domain';

import { ApiReligionEnum } from '../api';

export const toReligion = (_: ApiReligionEnum): Religion => Religion.Islam;

export const toApiReligion = (_: Religion): ApiReligionEnum =>
  ApiReligionEnum.Islam;
