import React from 'react';

const BookView = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        {/* Button to close my modal on top right */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-lg">
          &times;
        </button>

        {/* Show the image, title, author, and description of the book*/}
        <div className="flex flex-col items-center">
          <img
            src={book.cover || 'https://placehold.co/150x220?text=No+Image'}
            alt={book.title}
            className="w-32 h-48 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm text-gray-500 mt-4">{book.description || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default BookView;
