import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core"
import path from "path"
import { __prod__, __test__ } from "./constants"


export default {
  metadataProvider: ReflectMetadataProvider,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    patter: /^[\w-]+\d+\.[tj]s$/,
    transactional: true
  },
  entities: [],
  dbName: "postgres",
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  type: "postgresql",
  debug: !__prod__ || !__test__

} as Parameters<typeof MikroORM.init>[0]