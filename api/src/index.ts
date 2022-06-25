import "reflect-metadata"
import bodyParser from "koa-bodyparser"
import Koa from "koa"
import authRoutes from "./routes/authRoutes"
import { Connection, EntityManager, IDatabaseDriver, MikroORM } from "@mikro-orm/core"
import MikroConfig from "./mikro-orm.config"
import { ApolloServer } from "apollo-server-koa"
import cors from "koa-cors"
import { buildSchema } from "type-graphql"
import { MyContext } from "./types"
import { HelloResolver } from "./resolvers/hello"
import { UserResolver } from "./resolvers/user"
import { PORT } from "./constants"


const main = async () => {
  const app = new Koa()
  const orm = await MikroORM.init(MikroConfig).catch(e => console.error(e))
  let entityManager: EntityManager<IDatabaseDriver<Connection>>

  if (orm) {
    entityManager = orm.em.fork()
  }



  app.use(bodyParser())
  app.use(cors({
    credentials: true
  }))
  app.use(authRoutes.routes())



  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver
      ],
      validate: true
    }),
    context: ({ ctx }: MyContext) => {
      //TODO: setup user auth and drop into context
      return { ctx, em: entityManager }
    }
  })
  await apolloServer.start().then(() => {
    console.log("started")
  })
  apolloServer.applyMiddleware({
    app,
    cors: false
  })

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}/graphql`)

  })

}

main()