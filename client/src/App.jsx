import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import Navbar from './components/NavBar.jsx';
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
    <Router>
      <Navbar /> {/*renders the Navbar */}
      <div className="relative h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/book2.jpg')" }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;