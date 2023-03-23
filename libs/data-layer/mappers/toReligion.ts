import { type Religion } from '@camp/domain';
import { religions } from '@camp/domain';

import { type ApiReligionEnum } from '../api';

export const toReligion = (_: ApiReligionEnum): Religion => religions[0];
