import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export abstract class CustomBaseEntity {
  @PrimaryKey()
  id!: number

  @Property()
  createdAt?: Date = new Date()

  @Property({
    onUpdate: () => new Date()
  })
  updatedAt?: Date = new Date()
}

export class CustomBase extends CustomBaseEntity {}
