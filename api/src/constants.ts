
import dotenv from "dotenv"


dotenv.config()

export const pgConfig =
{
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,

}
export const PORT = process.env.PORT || 3000

export const __prod__ = process.env.NODE_ENV === "production"
export const __test__ = process.env.NODE_ENV === "test"

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

export const __secretKey__ = process.env.SECRETKEY