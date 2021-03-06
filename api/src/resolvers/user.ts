import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { GoogleProfile } from "../entities/GoogleProfile";
import { User } from "../entities/user";
import { MyContext } from "../types";
import { verify as GoogleValidate } from "../Utils/googleAuth"
import { signJwt } from "../Utils/jwt";

@ObjectType()
class ErrorType {
  @Field()
  type: string;
  @Field()
  message: string;
}


@ObjectType()
class UserResponse {
  @Field(() => [ErrorType], { nullable: true })
  errors?: ErrorType[];

  @Field(() => String, { nullable: true })
  userID?: string;

  @Field(() => String, { nullable: true })
  token?: string;
}


@Resolver(User)
export class UserResolver {


  @Query(() => User, { nullable: true })
  me(@Ctx() { ctx }: MyContext): User | null {
    if (!ctx.state.user) {
      return null;
    } {
      return ctx.state.user
    }

  }

  @Query(() => String, { nullable: true })
  refreshToken(@Ctx() { ctx }: MyContext): String | null {
    // no user found or token invalid
    if (!ctx.state.user) {
      return null;
    } {
      return signJwt(ctx.state.user.id)
    }

  }


  @Mutation(() => UserResponse)
  async googleAuth(
    @Arg("AuthToken") token: string,
    @Ctx() { em, ctx }: MyContext
  ): Promise<UserResponse> {
    const res = await GoogleValidate(token)

    if (!res) {
      return {
        errors: [
          {
            type: "Google Auth",
            message: "No Response from Google Auth"
          }
        ]
      }
    }
    const { sub, email, picture, family_name, given_name } = res!
    const UserExists = await em.findOne(GoogleProfile, { id: sub })

    if (UserExists) {
      const userID = UserExists.id
      ctx.state.userID = userID
      return {
        userID,
        token: signJwt(userID)
      }
    } else {
      const googleProfile = await em.create(GoogleProfile, {
        id: sub,
        email,
        picture
      })

      const user = await em.create(User, {
        displayName: given_name,
        firstName: given_name,
        lastName: family_name,
        googleProfile,
      })
      googleProfile.userID = user.id
      await em.persist([googleProfile, user]).flush()
      const userID = user.id
      ctx.state.userID = userID

      return {
        userID,
        token: signJwt(userID)
      }
    }
  }
}