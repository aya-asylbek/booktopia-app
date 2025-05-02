import React, { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import './styles/tailwind.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      return; //if user didn't search for book,button will not work
    }
    try {
      const res = await fetch(`https://booktopia-app-e99a.onrender.com/search?q=${query}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books. Please try again later.");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Чистое фоновое изображение без оверлея */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/book2.jpg')" }}
      />
      
      {/* Контент */}
      <div className="relative z-10 h-full flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto pt-16 pb-4">
          <SearchBar onSearch={handleSearch} />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
};

export default App;