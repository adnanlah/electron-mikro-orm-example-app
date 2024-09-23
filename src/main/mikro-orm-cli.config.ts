import { Options } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'

import sharedConfig from './mikro-orm-shared.config'

const config = {
  ...sharedConfig,
  entities: ['./src/main/entities/*.entity.ts'],
  migrations: {
    pathTs: './src/main/migrations'
  }
} as Options<PostgreSqlDriver>

export default config
