import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./user";


@ObjectType()
@Entity()
export class GoogleProfile {
  @Field(() => ID)
  @PrimaryKey()
  id: string

  @Field()
  @Property({nullable: true})
  email: string

  @Field()
  @Property({nullable: true})
  picture: string

  @Field(() => User)
  @Property({nullable: true})
  user: User

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()

}