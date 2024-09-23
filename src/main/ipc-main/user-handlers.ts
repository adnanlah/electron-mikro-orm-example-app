import { ipcMain } from 'electron'
import { orm } from '../config/db'
import { User } from '../entities/user.entity'

ipcMain.handle('get-users', async () => {
  const em = orm.em.fork()
  return await em.findAll(User)
})

ipcMain.handle('add-user', async (_, { firstName, lastName }) => {
  const em = orm.em.fork()
  em.create(User, { firstName, lastName })
  await em.flush()
})
