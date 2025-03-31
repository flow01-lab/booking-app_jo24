import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { users, events } from '../lib/starting-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      idU UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idLog TEXT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      nationality VARCHAR(255) NOT NULL,
      admin BOOLEAN
    );
  `;
  const insertedUsers = await Promise.all(
          users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return sql`
              INSERT INTO users (id, name, email, password)
              VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
              ON CONFLICT (id) DO NOTHING;
            `;
          }),
        );
    
  return insertedUsers;
}

async function seedEvents() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS events (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      picto TEXT,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      location TEXT NOT NULL,
      adressNum INT NOT NULL,
      adressRoad TEXT NOT NULL,
      city VARCHAR(255) NOT NULL,
      zipCode INT NOT NULL,
      stocks INT NOT NULL,
      sells INT NOT NULL,
      price INT NOT NULL
    );
  `;

  const insertedEvents = await Promise.all(
    events.map(
      (events) => sql`
        INSERT INTO events (title, date, location, adressNum, adressRoad, city, zipCode, stocks)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedEvents(),
      seedTickets(),
      seedOffers(),
      seedPayments(),
      seedCarts(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
