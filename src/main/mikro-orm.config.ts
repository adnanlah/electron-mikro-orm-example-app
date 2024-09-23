import { Options } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'

import { getEntities, getMigrations } from './utils/dynamic-imports'
import sharedConfig from './mikro-orm-shared.config'

const config = {
  ...sharedConfig,
  entities: getEntities(),
  migrations: {
    migrationsList: getMigrations()
  }
} as Options<PostgreSqlDriver>

export default config
