/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VUE_PLACESELECTOR_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
