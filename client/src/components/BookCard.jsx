import React, { useState, useEffect } from "react";
import BookView from './BookView.jsx';

const BookCard = ({ book, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const defaultCover = "https://placehold.co/150x220?text=No+Image";

  // Checking if book is in favorites
  useEffect(() => {
    if (!userId) return;

    const checkFavorite = async () => {
      try {
        const response = await fetch(
          `https://booktopia-app-e99a.onrender.com/api/favorites/check/${book.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setIsFavorite(data.isFavorite);
      } catch (err) {
        console.error("Error checking favorite:", err);
      }
    };

    checkFavorite();
  }, [book.id, userId]);

  // Toggle favorite status
  const toggleFavorite = async (e) => {
    e.stopPropagation();

    if (!userId) {
      window.location.href = '/login'; // или показать модалку логина
      return;
    }

    try {
      const url = `https://booktopia-app-e99a.onrender.com/api/favorites/${book.id}`;
      const method = isFavorite ? "DELETE" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
      } else {
        console.error("Failed to toggle favorite");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center border hover:shadow-xl transition duration-300 cursor-pointer h-[340px] relative"
        onClick={openModal}
      >
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "❤️" : "♡"}
        </button>

        <img
          src={book.cover ? book.cover : defaultCover}
          alt={book.title}
          className="w-32 h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
      </div>

      {/* Book details modal */}
      {isModalOpen && (
        <BookView 
          book={book} 
          onClose={closeModal}
          userId={userId}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default BookCard;