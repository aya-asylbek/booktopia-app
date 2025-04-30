import React, { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import './styles/tailwind.css';
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
    <div className="min-h-screen bg-gray-100 px-4 py-6">
        <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default App;
