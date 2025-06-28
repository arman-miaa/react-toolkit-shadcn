/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FB_APP_ID: string;
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
