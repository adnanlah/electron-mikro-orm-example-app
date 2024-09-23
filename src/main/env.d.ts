/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MIKRO_ORM_HOST: string
  readonly MIKRO_ORM_PORT: string
  readonly MIKRO_ORM_DB_NAME: string
  readonly MIKRO_ORM_USER: string
  readonly MIKRO_ORM_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
