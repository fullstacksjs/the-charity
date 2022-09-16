import type { Static } from 'runtypes';
import { Record, Union } from 'runtypes';

import { Path } from './Path';
import { Url } from './Url';

export const Config = Record({
  schemaUrl: Union(Url, Path),
});

export type Config = Static<typeof Config>;
