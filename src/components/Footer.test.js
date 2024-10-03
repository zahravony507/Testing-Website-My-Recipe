import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with correct text', () => {
  render(<Footer />);
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
});

test('renders social media links', () => {
  render(<Footer />);
  
  const facebookLink = screen.getByTestId('link-facebook');
  const xLink = screen.getByTestId('link-x');
  const instagramLink = screen.getByTestId('link-instagram');

  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveAttribute('href', 'https://x.com');

  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
