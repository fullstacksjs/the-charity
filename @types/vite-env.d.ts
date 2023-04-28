interface ImportMetaEnv {
  readonly APP_API_ENDPOINT: string;
  readonly APP_GRAPHQL_SCHEMA_URL?: string;
  readonly APP_AUTH0_DOMAIN: string;
  readonly APP_AUTH0_CLIENT_ID: string;
  readonly APP_APOLLO_DEV_TOOLS?: string;
  readonly APP_AUTH0_AUDIENCE: string;
  readonly APP_HASURA_ADMIN_SECRET?: string;
  readonly NODE_ENV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
