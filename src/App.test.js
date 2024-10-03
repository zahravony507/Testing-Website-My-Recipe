import { render, screen } from '@testing-library/react';
import App from './App';

test('renders image banner', async () => {
  render(<App />);
  const banner = await screen.findByTestId('image-banner');
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg');
});
