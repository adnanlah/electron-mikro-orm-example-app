import { initORM, orm } from './config/db'
import credentials from './utils/credentials'

export async function initApp(): Promise<void> {
  await initORM(credentials)

  await orm.getMigrator().up()
}
