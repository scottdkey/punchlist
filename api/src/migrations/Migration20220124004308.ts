import { Migration } from '@mikro-orm/migrations';

export class Migration20220124004308 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "google_profile" ("id" varchar(255) not null, "email" varchar(255) null, "picture" varchar(255) null, "user_id" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "google_profile" add constraint "google_profile_pkey" primary key ("id");');

    this.addSql('create table "apple_profile" ("id" varchar(255) not null, "email" varchar(255) not null, "picture" varchar(255) not null, "user_id" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "apple_profile" add constraint "apple_profile_pkey" primary key ("id");');

    this.addSql('create table "user" ("id" varchar(255) not null, "display_name" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "google_id" varchar(255) null, "apple_id" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
    this.addSql('alter table "user" add constraint "user_display_name_unique" unique ("display_name");');
  }

}
