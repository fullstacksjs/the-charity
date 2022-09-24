import { Config } from '@camp/domain';

export const config: Config = Config.check({
  schemaUrl: import.meta.env.APP_API_ENDPOINT,
});
