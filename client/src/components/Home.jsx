import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

const Home = ({ onSearch, books }) => {
  return (
    <div className="flex flex-col items-center py-10">
      <SearchBar onSearch={onSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
