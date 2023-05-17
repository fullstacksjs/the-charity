import { Religion } from '@camp/domain';

import { ApiReligionEnum } from '../api';

export const toReligion = (religion: ApiReligionEnum): Religion =>
  religion === ApiReligionEnum.Islam ? Religion.Islam : Religion.Unknown;

export const toApiReligion = (religion: Religion): ApiReligionEnum =>
  religion === Religion.Islam ? ApiReligionEnum.Islam : ApiReligionEnum.Unknown;
