import pgPromise from "pg-promise";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const pgp = pgPromise();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Connect to the PostgreSQL database
const dbConfig = {
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: { 
      rejectUnauthorized: false 
    },
    max: 20, // max connection
    idleTimeoutMillis: 30000 // if not use close after 30 sec
  };
  
  const db = pgp(dbConfig);
  
  //to connect to pg simple creating pool
  import { Pool } from 'pg';
  export const pool = new Pool(dbConfig);
  
  // test session
  pool.query('SELECT NOW()')
    .then(() => console.log('✅ Session store DB connected'))
    .catch(err => console.error('❌ Session store connection error', err));
  
  export default db;


  //pg promise for regular requests;
  //pg pool for sessions;