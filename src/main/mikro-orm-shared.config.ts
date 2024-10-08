import { GeneratedCacheAdapter, Options } from '@mikro-orm/core'
import { Migrator } from '@mikro-orm/migrations'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'

import * as metadata from '../../temp/metadata.json'
import credentials from './utils/credentials'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'

const config = {
  ...credentials,
  driver: PostgreSqlDriver,
  metadataProvider: TsMorphMetadataProvider,
  metadataCache: {
    enabled: true,
    adapter: GeneratedCacheAdapter,
    options: { data: metadata }
  },
  highlighter: new SqlHighlighter(),
  extensions: [Migrator],
  debug: true
} as Options<PostgreSqlDriver>

export default config
