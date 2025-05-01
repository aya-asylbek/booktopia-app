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
      const res = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books. Please try again later.");
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
// import React, { useState } from "react";
// import Header from "./components/Header.jsx";
// import SearchBar from "./components/SearchBar.jsx";
// import BookList from "./components/BookList.jsx";
// import './styles/tailwind.css';


// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async (query) => {
//     try {
//       const res = await fetch(`http://localhost:3001/search?q=${query}`);
//       const data = await res.json();
//       setBooks(data);
//     } catch (err) {
//       console.error("Error fetching books:", err);
//       setError("Failed to fetch books. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6">
//       <Header />
//       <SearchBar onSearch={handleSearch} />
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <BookList books={books} />
//     </div>
//   );
// };

// export default App;
