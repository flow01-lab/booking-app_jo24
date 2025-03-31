import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function listEvents() {
    const data = await sql `
        SELECT  
    `
    
}

export async function GET() {
    try {
         return Response.json(await listEvents());
     } catch (error) {
         return Response.json({ error }, { status: 500 });
     }
  }