import { ParameterizedContext } from "koa";


export type MyContext = {
  ctx: ParameterizedContext & {state : ExtendedState}
}

type ExtendedState = {
  user: String,
  options: {}
}