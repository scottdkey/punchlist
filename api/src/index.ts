import "reflect-metadata"
import bodyParser from "koa-bodyparser"
import Koa from "koa"

import authRoutes from "./routes/authRoutes"
// import { MikroORM } from "@mikro-orm/core"
// import MikroConfig from "./mikro-orm.config"
import { ApolloServer } from "apollo-server-koa"
import cors from "koa-cors"
import { buildSchema } from "type-graphql"
import { MyContext } from "./types"
import { HelloResolver } from "./resolvers/hello"


const main = async () => {
  const app = new Koa()
  //orm setup for later
  // const orm = await MikroORM.init(MikroConfig)



  app.use(bodyParser())
  app.use(cors({
    credentials: true
  }))
  app.use(authRoutes.routes())



  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver
      ],
      validate: true
    }),
    context: ({ ctx }: MyContext) => {
      //TODO: setup user auth and drop into context
      return { ctx }
    }
  })
  await apolloServer.start().then(() => {
    console.log("started")
  })
  apolloServer.applyMiddleware({ app })

  const __port__ = process.env.PORT || 3000

  app.listen(__port__, () => {
    console.log(`server started at http://localhost:${__port__}/graphql`)

  })

}

main()