import type { Env } from '../domain';

// TODO: add parsing
export const getEnv = (): Env => {
  /* eslint-disable @typescript-eslint/naming-convention */
  return { APP_GRAPHQL_SCHEMA_URL: import.meta.env.APP_GRAPHQL_SCHEMA_URL };
  /* eslint-enable @typescript-eslint/naming-convention */
};
