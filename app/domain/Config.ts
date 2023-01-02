import type { Static } from 'runtypes';
import { Boolean, Literal, Record, String, Union } from 'runtypes';

import { Path } from './Path';
import { Url } from './Url';

export const Config = Record({
  schemaUrl: Union(Url, Path),
  auth0: Record({
    domain: String,
    clientId: String,
    scope: String,
    audience: String,
    cacheLocation: Union(Literal('memory'), Literal('localstorage')),
  }),
  apolloDevTools: Boolean,
});

export type Config = Static<typeof Config>;
