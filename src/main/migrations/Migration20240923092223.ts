import { Migration } from '@mikro-orm/migrations';

export class Migration20240923092223 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "custom_base_entity" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null);`);

    this.addSql(`create table "user" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null);`);
  }

}
