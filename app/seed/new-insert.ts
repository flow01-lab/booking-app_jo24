import bcrypt from 'bcryptjs';
// import sql from '../lib/db';
import { users, events, offers } from '../lib/init-data';

import { createClient } from '../utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

}

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`
    CREATE DOMAIN phone_num AS TEXT
      CHECK( VALUE ~ '^\+?[1-9]\d{1,14}$' );
      `;
  await sql `
    CREATE DOMAIN email_adress AS TEXT
      CHECK( VALUE ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' );
    `;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      idLogin TEXT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL,
      phone phone_num NOT NULL,
      email email_adress NOT NULL UNIQUE,
      password TEXT NOT NULL,
      nationality VARCHAR(255) NOT NULL,
      admin BOOLEAN
    );
  `;
  const insertedUsers = await Promise.all(
          users.map( async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const idLogin = `${user.name}+'_'+${user.surname}`;
            return sql`
              INSERT INTO users (idLogin, name, surname, email, password, nationality, admin)
              VALUES (${idLogin}, ${user.name}, ${user.surname}, ${user.email}, ${hashedPassword}, ${user.nationality}, ${user.admin})
              ON CONFLICT (id) DO NOTHING;
            `;
          }),
        );
    
  return insertedUsers;
};

async function seedEvents() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE DOMAIN IF NOT EXISTS postal_code AS INT
    CHECK ( 
    VALUE ~ '^\d{5}$'
    OR VALUE ~ '^\d{5}-\d{4}$'
    );
    `;

  await sql`
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      picto TEXT,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      datetime TIMESTAMP,
      location TEXT NOT NULL,
      adressNum INT,
      adressRoad TEXT NOT NULL,
      city VARCHAR(255) NOT NULL,
      zipCode postal_code NOT NULL,
      stocks INT NOT NULL,
      sells INT,
      price INT NOT NULL
    );
  `;

  const insertedEvents = await Promise.all(
    events.map( async (event) => { 
      return sql`
        INSERT INTO events (picto, title, description, datetime, location, adressNum, adressRoad, city, zipCode, stocks, price)
        VALUES (${event.picto}, ${event.title}, ${event.description}, ${event.datetime}, ${event.location}, ${event.adressNum}, ${event.adressRoad}, ${event.city}, ${event.zipCode}, ${event.stocks}, ${event.price})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedEvents;
};

async function seedTickets() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      eventId SERIAL NOT NULL,
      userKey VARCHAR(255) NOT NULL,
      eventDate TIMESTAMP NOT NULL,
      eventLocation VARCHAR(255) NOT NULL,
      eventAdressNum INT NOT NULL,
      eventAdressRoad TEXT NOT NULL,
      eventCity VARCHAR(255) NOT NULL,
      eventZipCode INT NOT NULL
    );
  `;
  return sql;
};

async function seedOffers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS offers (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      ticketsQty INT NOT NULL,
      promo INT
    );
  `;

  const insertedOffers = await Promise.all(
    offers.map(
      (offer) => sql`
        INSERT INTO revenue (name, description, ticketsQty, promo)
        VALUES (${offer.title}, ${offer.description}, ${offer.ticketsQty}, ${offer.promo})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedOffers;
};

async function seedPayments() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS payments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      isSuccess BOOLEAN,
      state VARCHAR(255) NOT NULL,
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
      created_at TIMESTAMPTZ DEFAULT NOW(),
      eventTitle TEXT ARRAY,
      offerRelat TEXT ARRAY,
      ticketsQty INT4 ARRAY,
      priceOoT FLOAT4 ARRAY,
      tax FLOAT4 NOT NULL,
      UserRef UUID,
      cartLog TEXT NOT NULL,
      sumCartWT FLOAT4
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
