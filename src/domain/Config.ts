import type { Static } from 'runtypes';
import { Record, String, Union } from 'runtypes';

import { Path } from './Path';
import { Url } from './Url';

export const Config = Record({
  schemaUrl: Union(Url, Path),
  auth0: Record({
    domain: String,
    clientId: String,
  }),
});

export type Config = Static<typeof Config>;
