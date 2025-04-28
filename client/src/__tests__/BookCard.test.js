import { render, screen } from '@testing-library/react';
import BookCard from './BookCard';

test('renders book card with correct content', () => {
  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://via.placeholder.com/150'
  };

  render(<BookCard book={book} />);

  // Checking if the book title, author, and image are rendered correctly
  expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
  expect(screen.getByText('F. Scott Fitzgerald')).toBeInTheDocument();
  expect(screen.getByAltText('The Great Gatsby')).toBeInTheDocument();
});

  