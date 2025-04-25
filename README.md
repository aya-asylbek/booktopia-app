    BOOKTOPIA 🪴📚 – Cozy reads, endless discovery.
🌸 Booktopia is a cozy, reader-friendly web app that makes discovering books feel like stepping into a literary utopia.
🔍 Using a third-party API, it allows users to explore titles by author, keyword, or genre in a space designed to feel warm, welcoming, and effortless.
🛋️ With its clean layout and intuitive flow, Booktopia invites readers to get lost in stories and find their next great read.
📖✨ It’s more than just a search tool—it’s where your love of books meets your idea of paradise.



[![Deployed on Render](https://img.shields.io/badge/deployed%20on-render-%2300B5E2)](https://https://booktopia-app-z.onrender.com) 


A modern web app for book discovery and library management using the Google Books API.





## Technologies

**Frontend:**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  
**Database:**  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)  
**Tools:**  
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)  
![Concurrently](https://img.shields.io/badge/Concurrently-4A4A4A?style=for-the-badge)


## Features

- 🔍 Real-time book search with Google Books API
- 📚 Save favorite books to your collection
- 🎨 Clean, accessible interface with high contrast
- ⚡ Full-stack architecture with React + Express
- 📦 Database setup using PostgreSQL dump file


## Installation

1. Clone the repository:
```bash
git clone https://github.com/aya-asylbek/booktopia-app.git

cd booktopia-app

Install dependencies using concurrent setup:
npm install

cd client && npm install

Set up PostgreSQL database:


# Create database
createdb booktopia

# Import dump file
pg_restore -d booktopia booktopia_dump.sql
Create .env file:

env
DB_URL=postgres://youruser:yourpassword@localhost:5432/booktopia
GOOGLE_BOOKS_API_KEY=your_api_key
PORT=3001
Start development servers concurrently:


npm run dev

Deployment


The app is deployed on Render using:

Frontend: Static site deployment

Backend: Web service deployment


Project Structure
booktopia-app/
├── client/          # React frontend
├── server/          # Express backend
├── booktopia_dump.sql  # Database schema + sample data
├── package.json     # Concurrent scripts
└── README.md

API Documentation

Google Books API Integration
javascript
// Example search endpoint
app.get('/api/books', async (req, res) => {
  const { query } = req.query;
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );
  res.json(response.data.items);
});

Contributing

Fork the repository

Create feature branch: git checkout -b feature/new-feature

Commit changes: git commit -m 'Add awesome feature'

Push to branch: git push origin feature/new-feature

Open a Pull Request

License
MIT License

