import { Entity, Property } from '@mikro-orm/core'
import { CustomBaseEntity } from './custom-base.entity'

@Entity()
export class User extends CustomBaseEntity {
  @Property()
  firstName!: string

  @Property()
  lastName!: string
}

export interface UserEntity extends User {}
