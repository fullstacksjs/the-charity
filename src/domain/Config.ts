import type { Static } from 'runtypes';
import { Record } from 'runtypes';

import { Url } from './Url';

export const Config = Record({
  schemaUrl: Url,
});

export type Config = Static<typeof Config>;
