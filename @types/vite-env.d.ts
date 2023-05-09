interface ImportMetaEnv {
  readonly APP_API_ENDPOINT: string;
  readonly APP_GRAPHQL_SCHEMA_URL?: string;
  readonly APP_AUTH0_DOMAIN: string;
  readonly APP_AUTH0_CLIENT_ID: string;
  readonly APP_APOLLO_DEV_TOOLS?: string;
  readonly APP_AUTH0_AUDIENCE: string;
  readonly APP_HASURA_ADMIN_SECRET?: string;
  readonly APP_LOG_LEVEL?: string;
  readonly APP_DEBUG_SCOPES?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
