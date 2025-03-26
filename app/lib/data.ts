// This file contains all functions to fetch data from database.
// It define the variable 'sql' for access to data.  

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default sql;