import { Config } from '@camp/domain';

console.log(import.meta.env);

export const config: Config = Config.check({
  schemaUrl: import.meta.env.APP_API_ENDPOINT,
});
