import { MikroORM } from '@mikro-orm/core'
import { Options } from '@mikro-orm/core'
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'

import config from '../mikro-orm.config'
import { CredentialsType } from '../@types'

export let orm: MikroORM<PostgreSqlDriver>

export const initORM = async (credentials: CredentialsType): Promise<void> => {
  try {
    orm = await MikroORM.init<PostgreSqlDriver>({
      ...config,
      ...credentials
    } as Options<PostgreSqlDriver>)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log('=== error connecting to database ====', err.message)
    throw err
  }
}
