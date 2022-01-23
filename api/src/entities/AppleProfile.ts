import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./user";


@ObjectType()
@Entity()
export class AppleProfile {
  @Field(() => ID)
  @PrimaryKey()
  id: string

  @Field()
  @Property()
  email!: string

  @Field()
  @Property()
  picture!: string

  @Field(() => User)
  @Property()
  user: User

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()



}