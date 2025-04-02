import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { users, events, offers } from '../lib/starting-data';

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
            const idLogin = `${user.name}+'_'+${user.surname}`;
            return sql`
              INSERT INTO users (idLog, name, surname, email, password, nationality, admin)
              VALUES (${idLogin}, ${user.name}, ${user.surname}, ${user.email}, ${hashedPassword}, ${user.nationality}, ${user.admin})
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
      description TEXT,
      date DATE NOT NULL,
      location TEXT NOT NULL,
      adressNum INT NOT NULL,
      adressRoad TEXT NOT NULL,
      city VARCHAR(255) NOT NULL,
      zipCode INT NOT NULL,
      stocks INT NOT NULL,
      sells INT,
      price INT NOT NULL
    );
  `;

  const insertedEvents = await Promise.all(
    events.map(async (event) => {
      return sql`
        INSERT INTO events (picto, title, description, date, location, adressNum, adressRoad, city, zipCode, stocks, price)
        VALUES (${event.picto}, ${event.title}, ${event.description}, ${event.date}, ${event.location}, ${event.adressNum}, ${event.adressRoad}, ${event.city}, ${event.zipCode}, ${event.stocks}, ${event.price})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedEvents;
}

async function seedTickets() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      eventId UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      userKey VARCHAR(255) NOT NULL,
      eventDate DATE NOT NULL,
      eventLocation VARCHAR(255) NOT NULL,
      eventAdressNum INT NOT NULL,
      eventAdressRoad TEXT NOT NULL,
      eventCity VARCHAR(255) NOT NULL,
      eventZipCode INT NOT NULL
    );
  `;
/*
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;*/

  return sql;
}

async function seedOffers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS offers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      ticketsQty INT NOT NULL,
      promo INT
    );
  `;

  const insertedOffers = await Promise.all(
    offers.map(
      (offer) => sql`
        INSERT INTO revenue (name, description, ticketsQty)
        VALUES (${offer.name}, ${offer.description}, ${offer.ticketsQty})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedOffers;
}

async function seedPayments() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS payments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      released TEXT NOT NULL,
      date DATE NOT NULL,
      idCartLog VARCHAR(255) NOT NULL
    );
  `;
  
  return sql;
}

async function seedCarts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS cart (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      eventTitle ARRAY,
      offerRelat ARRAY;
      ticketsQty ARRAY;
      priceOoT ARRAY;
      tax INT NOT NULL;
      sumCartWT INT;
      cartLog TEXT NOT NULL;
    );
  `;
  
  return sql;
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
