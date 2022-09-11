import type { Config } from '../domain';

// FIXME: add env parsing
export const getConfig = (): Config => ({
  schemaUrl: import.meta.env.APP_GRAPHQL_SCHEMA_URL,
});
