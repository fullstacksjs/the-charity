import { Religion } from '@camp/domain';

import type { ApiReligionEnum } from '../api';

export const toReligion = (_: ApiReligionEnum): Religion => Religion.Islam;
