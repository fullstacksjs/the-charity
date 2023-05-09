import { z } from 'zod';

const Config = z.object({
  apiEndpoint: z.union([z.string().url(), z.string().regex(/^\/.*$/)]),
  schemaUrl: z.string().url().optional(),
  hasuraSecret: z.string().optional(),
  isDev: z.boolean(),
  debug: z.object({
    level: z.enum(['error', 'info', 'silent', 'trace', 'warn']),
    scopes: z.array(z.string()),
  }),
  auth0: z.object({
    domain: z.string(),
    clientId: z.string(),
    scope: z.string(),
    audience: z.string(),
    cacheLocation: z.union([z.literal('memory'), z.literal('localstorage')]),
  }),
  apolloDevTools: z.boolean(),
});

export type Config = z.infer<typeof Config>;

export const config = Config.parse({
  apiEndpoint: import.meta.env.APP_API_ENDPOINT,
  schemaUrl: import.meta.env.APP_GRAPHQL_SCHEMA_URL,
  hasuraSecret: import.meta.env.APP_HASURA_ADMIN_SECRET,
  isDev: import.meta.env.DEV,
  debug: {
    level: (import.meta.env.APP_LOG_LEVEL ?? 'silent') as 'silent',
    scopes: import.meta.env.APP_DEBUG_SCOPES?.split(',') ?? [],
  },
  auth0: {
    domain: import.meta.env.APP_AUTH0_DOMAIN,
    clientId: import.meta.env.APP_AUTH0_CLIENT_ID,
    audience: import.meta.env.APP_AUTH0_AUDIENCE,
    scope: 'read:current_user',
    cacheLocation: 'localstorage',
  },
  apolloDevTools: JSON.parse(
    import.meta.env.APP_APOLLO_DEV_TOOLS ?? 'false',
  ) as boolean,
} satisfies Config);
