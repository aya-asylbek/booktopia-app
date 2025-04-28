import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';

test('renders kids book titles from list', () => {
  const books = [
    { id: 1, title: 'The Very Hungry Caterpillar', author: 'Eric Carle', cover: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Where the Wild Things Are', author: 'Maurice Sendak', cover: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Goodnight Moon', author: 'Margaret Wise Brown', cover: 'https://via.placeholder.com/150' }
  ];

  render(<BookList books={books} />);


  expect(screen.getByText('The Very Hungry Caterpillar')).toBeInTheDocument();
  expect(screen.getByText('Where the Wild Things Are')).toBeInTheDocument();
  expect(screen.getByText('Goodnight Moon')).toBeInTheDocument();
});
