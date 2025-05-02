import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import db, { pool } from "./db.js";
import bcrypt from 'bcrypt';
import session from 'express-session';
import pgSession from 'connect-pg-simple'; 


const PgSession = pgSession(session);
dotenv.config();  

const app = express();
const PORT = process.env.PORT || 3001;


//Middleware setup to connect to my frontend and render url
const allowedOrigins = [
  'http://localhost:5173',
  'https://booktopia-app-z.onrender.com',
  'https://booktopia-app-e99a.onrender.com' 
];


app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    console.log('Request origin:', origin);
    
    if (allowedOrigins.some(allowed => origin.startsWith(allowed))) {
      callback(null, true);
    } else {
      console.warn('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.use(session({
  store: new PgSession({
    pool: pool,
    tableName: 'user_sessions',
    createTableIfMissing: false, // table created in postgres
    pruneSessionInterval: 3600 // will clean session after 1 hour
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Only HTTPS
    sameSite: 'none', // cross domen requests
    httpOnly: true, 
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
}));


// Test database connection (booktopia)
db.one('SELECT NOW()')
  .then(() => console.log('✅ Database connected successfully'))
  .catch(err => console.error('❌ Database connection error:', err));



//User Registration Endpoint-->POST /register-->>>Required fields: username,email, password
 
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate all fields
  if (!username || !email || !password) {
    return res.status(400).json({ 
      error: 'Username, email, and password are all required' 
    });
  }
   // Email format validation
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
 // Password strength validation
 if (password.length < 8) {
  return res.status(400).json({ 
    error: 'Password must be at least 8 characters' 
  });
}

//Username validation
if (username.length < 3 || username.length > 20) {
  return res.status(400).json({
    error: 'Username must be between 3-20 characters'
  });
}
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //SQL query to add to db booktopia
    const user = await db.one(
      `INSERT INTO users (username, email, password) 
       VALUES ($1, $2, $3) 
       RETURNING user_id, username, email`,  // Return user_id instead of id
      [username, email, hashedPassword]
    );
    
    req.session.userId = user.user_id; 
    res.status(201).json(user);
    
  } catch (err) {
    // Handle duplicate username/email
    if (err.code === '23505') {
      const field = err.constraint.includes('username') ? 'Username' : 'Email';
      return res.status(409).json({ 
        error: `${field} already exists` 
      });
    }
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

//Login query (Login with only email and password)
app.post('/login', async (req, res) => {
  const { email, password } = req.body; // Only email and password

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Check for user by email ONLY
    const user = await db.oneOrNone(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    // Verify credentials
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    // Create session
    req.session.userId = user.user_id;
    
    // Return minimal user data (no password)
    res.json({ 
      user_id: user.user_id,
      email: user.email
      // Optional: include username if needed for frontend display
      // username: user.username 
    });
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});


// User Logout Endpoint-->>POST /logout

app.post('/logout', (req, res) => {
  // Leave the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }
    
    // Clear the session cookie
    res.clearCookie('connect.sid', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    });
    
    res.json({ message: 'Logged out successfully' });
  });
});


// Server
app.get('/', (req, res) => {
  res.send('Hello from the Booktopia backend!');
});

// Search route
app.get('/search', async (req, res) => {
    const { q } = req.query;
  
    if (!q) {
      return res.status(400).json({ error: 'Search query required' });
    }
  
    try {
      const apiResponse = await fetch(
         `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`
      );
      const booksData = await apiResponse.json();
  
      if (!booksData.items) {
        return res.status(404).json({ error: 'No books found' });
      }
  
      res.json(
        booksData.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.[0] || 'Unknown Author',
          cover: item.volumeInfo.imageLinks?.thumbnail || '',
          description: item.volumeInfo.description || 'No description available.'
        }))
      );
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
