import { Path, Url } from '@camp/domain';
import type { Static } from 'runtypes';
import { Boolean, Literal, Record, String, Union } from 'runtypes';

const Config = Record({
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

export const config = Config.check({
  schemaUrl: import.meta.env.APP_API_ENDPOINT,
  auth0: {
    domain: import.meta.env.APP_AUTH0_DOMAIN,
    clientId: import.meta.env.APP_AUTH0_CLIENT_ID,
    audience: import.meta.env.APP_AUTH0_AUDIENCE,
    scope: 'read:current_user',
    cacheLocation: 'localstorage',
  },
  apolloDevTools: JSON.parse(import.meta.env.APP_APOLLO_DEV_TOOLS ?? 'false'),
} as Config);
