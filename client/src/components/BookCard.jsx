import React from "react";

const BookCard = ({ book }) => {
  const defaultCover = "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center border hover:shadow-xl transition duration-300">
      <img
        src={book.cover ? book.cover : defaultCover}
        alt={book.title}
        className="w-32 h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
    </div>
  );
};

export default BookCard;
// import React from "react";

// const BookCard = ({ book }) => {
//   const defaultCover = "https://via.placeholder.com/150?text=No+Image";

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
//       <img
//         src={book.cover ? book.cover : defaultCover}
//         alt={book.title}
//         className="w-32 h-48 object-cover rounded mb-4"
//       />
//       <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
//       <p className="text-gray-600">{book.author}</p>
//     </div>
//   );
// };

// export default BookCard;
