import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null); //  error handling

  const handleSearch = async (query) => {
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY; 

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();
      setBooks(data.items || []);
      setError(null); // Clear error if request is successful
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err); // Log the error for debugging purposes
    }
  };

  return (
    <div>
      <h1>📚 Booktopia</h1>
      <SearchBar onSearch={handleSearch} />
      
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message if any */}
      
      <BookList books={books} />
    </div>
  );
};

export default App;
