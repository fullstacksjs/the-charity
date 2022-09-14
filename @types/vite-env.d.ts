/// <reference types="vite/client" />

interface ImportMetaEnv {
  /* eslint-disable @typescript-eslint/naming-convention */
  readonly APP_GRAPHQL_SCHEMA_URL: string;
  /* eslint-enable @typescript-eslint/naming-convention */
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
