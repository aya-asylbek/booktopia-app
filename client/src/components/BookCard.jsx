import React from "react";

const BookCard = ({ book }) => {
  //adding image default
  const defaultCover = "https://via.placeholder.com/150?text=No+Image";
  return (
    <div className="book-card">
      <img
        src={book.cover ? book.cover : defaultCover}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;
