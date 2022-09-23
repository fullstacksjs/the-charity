/// <reference types="vite/client" />

interface ImportMetaEnv {
  /* eslint-disable @typescript-eslint/naming-convention */
  readonly APP_API_ENDPOINT: string;
  /* eslint-enable @typescript-eslint/naming-convention */
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
