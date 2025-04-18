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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
