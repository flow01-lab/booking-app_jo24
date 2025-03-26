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
    adressNum: 
};

export type Ticket = {
    userKey: string;
    id.event
};