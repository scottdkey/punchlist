import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core"
import path from "path"
import { pgConfig, __prod__, __test__ } from "./constants"
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
  entities: [
    User,
    AppleProfile,
    GoogleProfile
  ],
  dbName: pgConfig.database,
  user: pgConfig.user,
  password: pgConfig.password,
  host: pgConfig.host,
  port: pgConfig.port,
  type: "postgresql",
  debug: !__prod__ || !__test__

} as Parameters<typeof MikroORM.init>[0]