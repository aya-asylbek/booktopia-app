import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;
