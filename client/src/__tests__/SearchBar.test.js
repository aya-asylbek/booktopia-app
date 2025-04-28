import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders the search button', () => {
  render(<SearchBar onSearch={() => {}} />);

  
  const button = screen.getByText(/Search/i);
  expect(button).toBeInTheDocument();
});



