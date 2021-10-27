import 'dotenv/config'

export const dbName = process.env.DB_NAME as string
export const dbUser = process.env.DB_USER as string
export const dbHost = process.env.DB_HOST
export const dbPort = process.env.DB_PORT
export const dbPassword = process.env.DB_PASSWORD
export const port = process.env.PORT || 3001