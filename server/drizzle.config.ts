import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
  dialect: 'postgresql',
  schema: './src/drizzle/schema/*',
  out: './src/drizzle/migrations',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config
