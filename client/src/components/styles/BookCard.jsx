import React from "react";

const BookCard = ({ book }) => {
  const volume = book.volumeInfo;

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img
        src={volume.imageLinks?.thumbnail}
        alt={volume.title}
        style={{ width: "100px" }}
      />
      <h3>{volume.title}</h3>
      <p>{volume.authors?.join(", ")}</p>
    </div>
  );
};

export default BookCard;
