# 📚 Booktopia App

Welcome to Booktopia – your cozy, user-friendly web app to discover your next great read!  
Booktopia uses the Google Books API to help users search, save, and explore books easily.

[Live Demo on Render](https://booktopia-app-z.onrender.com) 

[GitHub Repository](https://github.com/aya-asylbek/booktopia-app)

## Table of Contents
- [About Booktopia](#about-booktopia)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Upcoming Features](#upcoming-features)
- [Database Schema](#database-schema)
- [Installation & Setup](#installation--setup)
- [Wireframes & User Flow](#wireframes--user-flow)

- [Acknowledgements](#acknowledgements)

---

## About Booktopia
Booktopia makes book discovery seamless and fun!  
Users can search by author or title, view book covers, and save their favorite books — all inside a welcoming, minimalist design.
 
 [Back to Table of Contents](#table-of-contents)


## Technology Stack
- **Frontend**: ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) + ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- **Database**: ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- **API**: ![Google Books API](https://img.shields.io/badge/Google%20Books%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)
- **Concurrent Execution**: ![Concurrently](https://img.shields.io/badge/Concurrently-FF6F61?style=for-the-badge)
- **Deployment**: ![Render](https://img.shields.io/badge/Render-00A9E0?style=for-the-badge&logo=render&logoColor=white)

[Back to Table of Contents](#table-of-contents)

---

## Features
- ✅ Search for books by title or author using the Google Books API.
- ✅ View book details (title, author, cover image and etc).
- ✅ Minimalist UI with a clean and intuitive experience.

## Upcoming Features:  
- User Login/Registration:
- For personalized book tracking, allowing users to save books to a personal library (Favorites, Finished, To Read).

- Book Download Feature: Provide options to download books in various formats, such as PDF and EPUB.

[Back to Table of Contents](#table-of-contents)

---

## Database Schema
📌 Full database structure is available in `booktopia_dump.sql`.


![Diagram](https://github.com/user-attachments/assets/df799428-3d9b-4fcb-93f1-6547bcb4b755)


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
```
[Back to Table of Contents](#table-of-contents)

## Installation & Setup

1️⃣ Clone the Repository

```
git clone https://github.com/aya-asylbek/booktopia-app.git

```
```
cd booktopia-app
```

2️⃣ Install Dependencies

```
cd client && npm install
```
```
cd ../server && npm install
```

3️⃣ Set Up Environment Variables

Create .env files in both client/ and server/

Add your Google Books API Key.

4️⃣ Set Up PostgreSQL Database
```
cd server
```
```
psql postgres -f booktopia_dump.sql
```

5️⃣ Run the Project Option 1: Run Frontend & Backend Separately

```
cd client && npm start
```
# Open new terminal

```
cd server && npm start
```

Option 2: Run Both with Concurrently
```
npm install concurrently --save-dev
```
(Make sure concurrently is installed in root of project!)

Add this to your package.json (server-side) under "scripts":
```
"scripts": {
  "start": "node server.js",
  "dev": "concurrently \"cd client && npm start\" \"cd server && npm start\""
}
```

Then run:
```
npm run dev
```
[Back to Table of Contents](#table-of-contents)

## Wireframes & User Flow
![Wireframe](https://github.com/user-attachments/assets/834e288d-90fa-411e-82f8-5e61f1cd46ad)

Landing Page:

- User lands on the homepage, where they can search for books.

- Option to log in or sign up if they want personalized features (favorites, book tracking).

Search for a Book:

- User enters a book title or author into the search bar.

- Results are displayed with book cover, title, and author.


Book Details Page:

- User views the book’s cover image, description, and author details.

- Option to save the book to their personal library (if logged in).

User Login (if not logged in):

- User clicks the "Login" button if they want to save books.

- After logging in, user can view and save books to their personal library (favorites, finished, to read).
- User can log out of their account after finishing.

User registration 
- If the user doesn’t have an account, they can click "Sign Up". 
- Create a new account with a username, email, and password.
- Once signed up, they can log in and save books.

[Back to Table of Contents](#table-of-contents)

## Acknowledgements

A big THANK YOU to:

Techtonica program for mentorship.

My collaborators & peers for support.

[Back to Table of Contents](#table-of-contents)




