import { CredentialsType } from '../@types'

const credentials = {
  host: 'localhost',
  port: 5432,
  dbName: 'test-db',
  user: 'postgres',
  password: ''
} satisfies CredentialsType

export default credentials
