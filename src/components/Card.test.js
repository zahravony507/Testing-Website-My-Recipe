import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockData = {
  id: 1,
  name: 'Spaghetti Bolognese',
  image: 'https://dummyjson.com/image/spaghetti.jpg',
  rating: 4.5,
  tags: ['Italian', 'Pasta']
};

test('renders Card component with correct data', () => {
  render(<Card el={mockData} />);
  
  const img = screen.getByTestId('img-recipe-1');
  const title = screen.getByTestId('title-recipe-1');
  const rating = screen.getByTestId('rating-recipe-1');
  const link = screen.getByTestId('link-recipe-1');

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://dummyjson.com/image/spaghetti.jpg');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Spaghetti Bolognese');

  expect(rating).toBeInTheDocument();
  expect(rating).toHaveTextContent('4.5');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://dummyjson.com/recipes/1');
});
