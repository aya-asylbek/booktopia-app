import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import db from "./db.js";
import bcrypt from 'bcrypt';
import session from 'express-session';


dotenv.config();  

const app = express();
const PORT = 3001;

//Middleware setup to connect to my frontend
app.use(cors({ 
  credentials: true, // Allow cookies to be sent
  origin: 'http://localhost:5173' // Frontend
}));
app.use(express.json()); // Parse JSON request bodies
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret-key', // (Session secret(my sekret key in .env)
  resave: false, // Don't save session 
  saveUninitialized: false, 
  cookie: { secure: false } 
}));

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
