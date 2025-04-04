// Ressources used for installation and setup of Drizzle ORM in Vercel Postgres :

// # With Vercel Postgres Database serverless :
  // https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel#create-a-new-vercel-postgres-database

// # With Vercel project with MarketPlace Database (choose Supabase Server) :
  // https://orm.drizzle.team/docs/get-started/vercel-new

import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' }); // or '.env.local'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});