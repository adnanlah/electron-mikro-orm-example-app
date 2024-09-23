import { basename } from 'path'

function getEntities(): unknown[] {
  const modules = import.meta.glob('../entities/*.entity.ts', { eager: true })

  return Object.values(modules).flatMap((mod) => {
    const moduleExports = mod as Record<string, unknown>
    return Object.values(moduleExports).filter((exp) => typeof exp === 'function')
  })
}

function getMigrations(): unknown[] {
  const migrations: Record<string, unknown> = {}

  const migrationModules = import.meta.glob('../migrations/*.ts', { eager: true })

  Object.entries(migrationModules).forEach(([path, module]) => {
    const name = basename(path)
    migrations[name] = Object.values(module as Record<string, unknown>)[0]
  })

  const migrationsList = Object.keys(migrations).map((migrationName) => ({
    name: migrationName,
    class: migrations[migrationName]
  }))

  return migrationsList
}

export { getEntities, getMigrations }
