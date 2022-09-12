/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_GRAPHQL_SCHEMA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
