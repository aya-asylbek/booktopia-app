# 📚 Booktopia App
Welcome to Booktopia – your cozy, user-friendly web app to discover your next great read!  
Booktopia uses the Google Books API to help users search, save, and explore books easily.

[Live Demo on Render](https://booktopia-app-z.onrender.com) | [GitHub Repository](https://github.com/aya-asylbek/booktopia-app)

## Table of Contents
- [About Booktopia](#about-booktopia)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Database Schema](#database-schema)
- [Installation & Setup](#installation--setup)
- [Wireframes & User Flow](#wireframes--user-flow)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)

---

## About Booktopia
Booktopia makes book discovery seamless and fun!  
Users can search by author or title, view book covers, and save their favorite books — all inside a welcoming, minimalist design.

---

## Technology Stack
- **Frontend**: ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) + ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- **Database**: ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- **API**: ![Google Books API](https://img.shields.io/badge/Google%20Books%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)
- **Concurrent Execution**: ![Concurrently](https://img.shields.io/badge/Concurrently-FF6F61?style=for-the-badge)
- **Deployment**: ![Render](https://img.shields.io/badge/Render-00A9E0?style=for-the-badge&logo=render&logoColor=white)

---

## Features
- ✅ Search for books by title or author using the Google Books API.
- ✅ View book details (title, author, cover image and etc).
- ✅ Save books to a personal library (Favorites, Finished, To Read- after Registration).
- ✅ Minimalist UI with a clean and intuitive experience.

**Upcoming Features**:  
- Login/Registration  
- Book Download Options

---

## Database Schema
📌 Full database structure is available in `booktopia_dump.sql`.

```sql
-- Books Table
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  genre VARCHAR(100),
  google_book_id VARCHAR(100) UNIQUE,
  cover_image_url TEXT
);

-- Users Table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(255),
  password TEXT
);

-- Favorites Table
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  book_id INTEGER REFERENCES books(book_id)
);


⚙️ Installation & Setup

1️⃣ Clone the Repository


git clone https://github.com/aya-asylbek/booktopia-app.git

cd booktopia-app

2️⃣ Install Dependencies


cd client && npm install
cd ../server && npm install

3️⃣ Set Up Environment Variables

Create .env files in both client/ and server/

Add your Google Books API Key.

4️⃣ Set Up PostgreSQL Database

cd server
psql postgres -f booktopia_dump.sql

5️⃣ Run the Project Option 1: Run Frontend & Backend Separately

cd client && npm start

# Open new terminal

cd server && npm start

Option 2: Run Both with Concurrently

(Make sure concurrently is installed!)

Add this to your package.json (server-side) under "scripts":

"scripts": {
  "start": "node server.js",
  "dev": "concurrently \"cd client && npm start\" \"cd server && npm start\""
}
Then run:

npm run dev

🎨 Wireframes & User Flow



🚀 Future Enhancements


User Login/Registration: For personalized book tracking.
Save books to a personal library (Favorites, Finished, To Read)

Book Download Feature: (PDF/EPUB format).


❤️ Acknowledgements

A big THANK YOU to:

Techtonica for mentorship.

My collaborators & peers for support.

The developer community for guidance.


