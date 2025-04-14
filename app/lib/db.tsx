import postgres from 'postgres';

const connectionStringDB = process.env.DATABASE_URL;
// const connectionStringPG = process.env.POSTGRES_URL!;

const sql = postgres(connectionStringDB, { ssl: 'require' });

export default sql;