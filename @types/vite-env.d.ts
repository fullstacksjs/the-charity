/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_ENDPOINT: string;
  readonly APP_AUTH0_DOMAIN: string;
  readonly APP_AUTH0_CLIENT_ID: string;
  readonly APP_APOLLO_DEV_TOOLS?: string;
  readonly APP_AUTH0_AUDIENCE: string;
  readonly APP_NODE_ENV: string;
}

interface ImportMetaEnv {
  readonly CYPRESS_API_ENDPOINT: string;
  readonly CYPRESS_AUTH0_DOMAIN: string;
  readonly CYPRESS_AUTH0_CLIENT_ID: string;
  readonly CYPRESS_AUTH0_AUDIENCE: string;
  readonly CYPRESS_NODE_ENV: string;
  readonly CYPRESS: 'true';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
