import "dotenv/config";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL não definida");
}

export const sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",            // o Supabase exige SSL
    max: 10,                   // máximo de conexões
    transform: postgres.camel, // empresa_id (banco) <-> empresaId (código)
});