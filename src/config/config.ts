import { Config } from '@camp/domain';

export const config: Config = Config.check({
  schemaUrl: import.meta.env.APP_API_ENDPOINT,
  auth0: {
    domain: import.meta.env.APP_AUTH0_DOMAIN,
    clientId: import.meta.env.APP_AUTH0_CLIENT_ID,
  },
});
