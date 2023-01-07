/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_ENDPOINT: string;
  readonly APP_AUTH0_DOMAIN: string;
  readonly APP_AUTH0_CLIENT_ID: string;
  readonly APP_APOLLO_DEV_TOOLS?: string;
  readonly APP_AUTH0_AUDIENCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
