import { AbstractSqlConnection, AbstractSqlDriver, EntityManager } from "@mikro-orm/postgresql";
import { ParameterizedContext } from "koa";
import { User } from "./entities/user";


export type MyContext = {
  ctx: ParameterizedContext & { state: ExtendedState },
  em: EntityManager<any> & EntityManager<AbstractSqlDriver<AbstractSqlConnection>>
}

type ExtendedState = {
  user: User,
  options: {}
}