📚 Booktopia App - Final Project Plan
GitHub: Booktopia App Repository
Table of Contents

Project Objective

Tech Stack

Installation Instructions

Features

Future Plans

Database Schema

Wireframe

Work Milestones

User Flow and Wireframes

Style Guide

1. 📑 Project Objective
Booktopia is a cozy, user-friendly web app designed to help readers discover their next great read. By using the Google Books API, users can search for books by author, title, and genre. With its intuitive interface, Booktopia provides a seamless book discovery experience, where readers can save their favorite books and explore new titles in a welcoming, minimalist design.

2. 🛠️ Tech Stack

Tool	Role
React.js	Frontend Library
Node.js	Backend Framework
Express.js	Web Framework
PostgreSQL	Database
Google Books API	API for Book Data
Render	Deployment
3. 💻 Installation Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/aya-asylbek/booktopia-app.git
cd booktopia-app
Install Dependencies
Backend:

bash
Copy
Edit
cd backend
npm install
Frontend:

bash
Copy
Edit
cd frontend
npm install
Set Up PostgreSQL
Create the database:

bash
Copy
Edit
CREATE DATABASE booktopia;
Configure Environment Variables
Create a .env file and add your API keys and database credentials.

Run the App
Backend:

bash
Copy
Edit
cd backend
node server.js
Frontend:

bash
Copy
Edit
cd frontend
npm start
4. ✨ Features
Book Search: Users can search for books by title or author.

Book List: Displays books from search results.

Save Books: Users can save their favorite books.

Minimalist Design: Clean, user-friendly interface.

User Registration (Future): Users can create accounts to save their books.

5. 🚀 Future Plans
User Authentication: Users can log in and save books.

Advanced Book Management: Categorize books as "Favorites", "To Read", and "Finished".

Book Downloads: Users can download books in PDF or EPUB format.

6. 🗃️ Database Schema
Books Table
sql
Copy
Edit
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  genre VARCHAR(100),
  google_book_id VARCHAR(100) UNIQUE,
  cover_image_url TEXT
);
Favorites Table
sql
Copy
Edit
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(book_id),
  user_id INTEGER REFERENCES users(user_id)
);
Users Table (Future)
sql
Copy
Edit
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(255),
  password TEXT
);
7. 🖼️ Wireframe
Landing Page: Search bar and book list.

User Profile: Display saved books, categorized.

Book Card: Shows book details like title, author, and cover image.

8. 🛠️ Work Milestones
Week 1:
Set up the Node.js backend with Express and PostgreSQL.

Integrate Google Books API.

Build initial React app and wireframe design.

Deploy the app to Render.

Week 2:
Create basic UI components for search results.

Implement error handling and validation.

Start working on user registration feature.

Week 3:
Finalize database schema and connect frontend with backend.

Implement user authentication (if time permits).

Week 4:
Bug fixes, UI adjustments, and deployment readiness.

Finalize README documentation.

9. 🚶‍♂️ User Flow and Wireframes
User Flow:

User lands on the homepage.

User searches for books by title or author.

Book results are displayed.

User saves books to their profile (if registered).

Wireframes:

Landing Page: Includes a search bar and book list.

User Profile Page: Displays the list of saved books (with registration).

Book Cards: Displays book details like title, author, and cover image.

10. 🎨 Style Guide
Audience:
Book lovers and readers who want to organize and discover new books.

App Category:
Books, Entertainment, Personal Library

Colors:
Main Color: Soft Blue (#6C9BCF)

Accent Color: Light Yellow (#F7D774)

Background: Light Gray (#F9F9F9)

Text: Dark Gray (#333333)