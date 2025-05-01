import React, { useState } from "react";
import BookView from './BookView.jsx';


const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const defaultCover = "https://placehold.co/150x220?text=No+Image";


  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center border hover:shadow-xl transition duration-300 cursor-pointer h-[340px]"

        onClick={openModal} // Open the modal when the card is clicked
      >
        <img
          src={book.cover ? book.cover : defaultCover}
          alt={book.title}
          className="w-32 h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
      </div>

      {/* BookView component(from components folder) for displaying description */}
      {isModalOpen && <BookView book={book} onClose={closeModal} />}
    </div>
  );
};

export default BookCard;
