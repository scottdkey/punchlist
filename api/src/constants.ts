


export const pgConfig = () => {
  return {
    dbName: process.env.PG_DATABASE || "postgres",
    dbUser: process.env.PG_USER || "postgres",
    dbPass: process.env.PG_PASSWORD || "postgres",
    host: process.env.PG_HOST || "localhost",
    port: process.env.PG_PORT || 5432,

  }
}
export const PORT = process.env.PORT || 3000

export const __prod__ = process.env.NODE_ENV === "production"
export const __test__ = process.env.NODE_ENV === "test"

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

export const __secretKey__ = process.env.SECRETKEY