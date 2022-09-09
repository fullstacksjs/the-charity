import type { Env } from '../domain';

// TODO: add parsing
export const getEnv = (): Env => {
  return { APP_GRAPHQL_SCHEMA_URL: import.meta.env.APP_GRAPHQL_SCHEMA_URL };
};
