import React, { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import './App.css'; 



const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null); //  error handling

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await res.json();
      setBooks(data); 
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  return (
    <div>
        <Header />
      <SearchBar onSearch={handleSearch} />
      
      {error && <p style={{ color: "red" }}>{error}</p>} 
      
      <BookList books={books} />
    </div>
  );
};

export default App;
