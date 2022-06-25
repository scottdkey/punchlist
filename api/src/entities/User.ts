import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";
import { v4 } from "uuid";



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

  @Field()
  @Property({ nullable: true})
  googleID: string

  @Field()
  @Property({ nullable: true })
  appleID: string

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()
}