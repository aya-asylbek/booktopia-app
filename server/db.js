import pgPromise from "pg-promise";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const pgp = pgPromise();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Connect to the PostgreSQL database
const db = pgp({
  host: DB_HOST,
  port: Number(DB_PORT), 
  database: DB_NAME, 
  user: DB_USER,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false, 
  }
});

//console.log("Loaded DB password:", process.env.DB_PASSWORD); // ✅ Should not be undefined

export default db;
