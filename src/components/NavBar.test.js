import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

test('renders NavBar with search form', () => {
  const mockSearch = jest.fn();
  render(<NavBar search={mockSearch} />);

  const title = screen.getByTestId('my-recipe');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('My Recipe');

  const searchForm = screen.getByTestId('form-search');
  expect(searchForm).toBeInTheDocument();
});

test('submits search form with input value', () => {
  const mockSearch = jest.fn();
  render(<NavBar search={mockSearch} />);
  
  const input = screen.getByPlaceholderText('Recipe Name');
  const button = screen.getByRole('button', { name: /Search/i });
  
  fireEvent.change(input, { target: { value: 'Spaghetti' } });
  fireEvent.click(button);
  
  expect(mockSearch).toHaveBeenCalledWith('Spaghetti');
});
