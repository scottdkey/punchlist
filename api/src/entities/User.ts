import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";
import { v4 } from "uuid";
import { GoogleProfile } from "./GoogleProfile";
import { AppleProfile } from "./AppleProfile"



@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryKey()
  id: string = v4()

  @Field()
  @Property()
  @Unique()
  displayName!: string

  @Field()
  @Property()
  firstName!: string

  @Field()
  @Property()
  lastName!: string

  @Field(() => GoogleProfile)
  @Property({ nullable: true })
  googleProfile: GoogleProfile

  @Field(() => AppleProfile)
  @Property({ nullable: true })
  appleProfile: AppleProfile

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()
}