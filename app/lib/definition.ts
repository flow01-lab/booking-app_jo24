// This file contains type definitions of data from database.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
    id: string;
    created_at: string;
    idLogin: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    password: string;
    nationality: string;
    admin: boolean;
  };

export type Event = {
    id: number;
    created_at: string;
    picto: string;
    title: string;
    description: string;
    datetime: string;
    location: string;
    adressNum: number;
    adressRoad: string;
    city: string;
    zipCode: number;
    stocks: number;
    sells: number;
    price: number;
};

export type Ticket = {
    id: number;
    created_at: string;
    userKey: string; // Concat of 'User.id' and 'Payment.id' -> to create unique Id
    eventId: string;
    eventDate: string;
    eventLocation: string;
    eventAdressNum: number;
    eventAdressRoad: string;
    eventCity: string;
    eventZipCode: number;
};

export type Offer = {
    id: string;
    created_at: string;
    title: string;
    description: string;
    ticketsQty: number;
    promo: number;
}

export type Payment = {
    id: string;
    created_at: string;
    isSuccess: boolean;
    state: 'not start' | 'in progress';
    idCartLog: string;
}

export type Cart = {
    id: string;
    created_at: string;
    eventTitle: string[];
    offerRelat: string[];
    ticketsQty: number[];
    priceOoT: number[];
    tax: number;
    sumCartWT: number;
    userRef: string;
    cartLog: string;
};