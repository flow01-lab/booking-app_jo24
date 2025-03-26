// This file contains type definitions of data from database.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
    idU: string;
    idLog: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    nationality: string;
    admin: boolean;
  };

export type Event = {
    id: string;
    title: string;
    date: string;
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
    userKey: string; // Concat of 'User.idU' and 'Payment.idPay' -> to create unique Id
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
    name: string;
    description: string;
    ticketsQty: number;
    promo: number;
}

export type Cart = {
    eventTitle: string;
    offerRelat: string;
    ticketsQty: number;
    priceOoT: number;
    tax: number;
    sumCartWT: number;
};