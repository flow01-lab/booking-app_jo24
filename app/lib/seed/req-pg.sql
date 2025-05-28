/*** === DATABASE QUERIES === ***/

CREATE DATABASE IF NOT EXISTS Booking_JO24_App;

/*** TABLE Users ***/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE DOMAIN IF NOT EXISTS phone_num AS TEXT
CHECK VALUE ~ '^\+?[1-9]\d{1,14}$' ;

CREATE DOMAIN IF NOT EXISTS email_adress AS TEXT
CHECK VALUE ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' ;

    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      idLogin TEXT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL,
      email email_adress NOT NULL UNIQUE,
      phone phone_num NOT NULL,
      password TEXT NOT NULL,
      nationality VARCHAR(255) NOT NULL,
      admin BOOLEAN
    );


    INSERT INTO users (idLogin, name, surname, email, phone, password, nationality, admin)
              VALUES ()
              ON CONFLICT (id) DO NOTHING;

/*** TABLE Events ***/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE DOMAIN postal_code AS TEXT DEFAULT '75000';
    CHECK ( 
    VALUE ~ '^\d{5}$'
    OR VALUE ~ '^\d{5}-\d{4}$'
    );

  create domain postal_code as text default '75000' check (value ~ '^\d{5}$' or value ~ '^\d{5}-\d{4}$');

    CREATE TABLE IF NOT EXISTS events (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
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

        INSERT INTO events (picto, title, description, datetime, location, adressNum, adressRoad, city, zipCode, stocks, price)
        VALUES (${event.picto}, ${event.title}, ${event.description}, ${event.datetime}, ${event.location}, ${event.adressNum}, ${event.adressRoad}, ${event.city}, ${event.zipCode}, ${event.stocks}, ${event.price})
        ON CONFLICT (id) DO NOTHING;

/*** TABLE Tickets ***/

  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
 
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

/*** TABLE Offers ***/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS offers (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      ticketsQty INT NOT NULL,
      promo INT
    );

        INSERT INTO offers (title, description, ticketsQty, promo)
        VALUES (${offer.title}, ${offer.description}, ${offer.ticketsQty}, ${offer.promo})
        ON CONFLICT (id) DO NOTHING;

/*** TABLE Payments ***/


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS payments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      isSuccess BOOLEAN,
      state VARCHAR(255) NOT NULL,
      idCartLog VARCHAR(255) NOT NULL
    );

/*** TABLE Cart ***/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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