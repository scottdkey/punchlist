


export const pgConfig = () => {
  return {
    dbName: process.env.dbName || "postgres",
    dbUser: process.env.dbUser || "postgres",
    dbPass: process.env.dbPass || "postgres",
    host: process.env.dbHost || "localhost",
    port: process.env.dbPort || 5432,

  }
}

export const __prod__ = process.env.NODE_ENV === "production"
export const __test__ = process.env.NODE_ENV === "test"