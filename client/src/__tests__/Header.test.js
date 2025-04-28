import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with Booktopia title', () => {
  render(<Header />);

  expect(screen.getByText(/Booktopia/i)).toBeInTheDocument();
});
