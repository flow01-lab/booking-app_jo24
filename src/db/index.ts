import { drizzle } from 'drizzle-orm/vercel-postgres';
import { config } from 'dotenv';

config({ path: '.env' }); // or .env.local

export const db = drizzle();
