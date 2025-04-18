import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();  

const app = express();

app.use(cors());  
app.use(express.json());  

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
  console.log('Google API Key:', process.env.GOOGLE_API_KEY);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
