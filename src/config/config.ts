import { Config } from '../domain';

export const config: Config = Config.check({
  schemaUrl: import.meta.env.APP_GRAPHQL_SCHEMA_URL,
});
