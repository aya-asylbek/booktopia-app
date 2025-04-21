import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
