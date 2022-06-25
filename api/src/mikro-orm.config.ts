import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core"
import path from "path"
import { __prod__, __test__ } from "./constants"
import { AppleProfile } from "./entities/AppleProfile"
import { GoogleProfile } from "./entities/GoogleProfile"
import { User } from "./entities/user"


export default {
  metadataProvider: ReflectMetadataProvider,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    patter: /^[\w-]+\d+\.[tj]s$/,
    transactional: true
  },
  entities: [User, GoogleProfile, AppleProfile],
  dbName: "postgres",
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  type: "postgresql",
  debug: !__prod__ || !__test__

} as Parameters<typeof MikroORM.init>[0]