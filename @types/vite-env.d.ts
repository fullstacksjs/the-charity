/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
