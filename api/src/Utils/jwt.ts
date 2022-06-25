import jwt, { JwtPayload } from "jsonwebtoken"
import { __secretKey__ } from "../constants"


export interface TokenInterface {
  id: string
}


export const signJwt = (userId: String): string => jwt.sign({ userId }, __secretKey__!)
export const verifyJwt = (token: string): JwtPayload | string => jwt.verify(token, __secretKey__!)