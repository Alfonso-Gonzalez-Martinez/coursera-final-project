import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test('displays the h1 and h2 text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const heading1 = screen.getByText('Little Lemon');
    const heading2 = screen.getByText('Chicago');
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });

  test('displays the paragraph text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const paragraph = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua./i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test('displays the food image with correct alt text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const imageElement = screen.getByAltText('food platter');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('image-food.jpg'));
  });

  test('displays the "Reserve a Table" button', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const buttonElement = screen.getByLabelText('Reserve a Table');
    expect(buttonElement).toBeInTheDocument();
  });

  test('button links to /Reservations', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link', { name: /Reserve a Table/i });
    expect(linkElement).toHaveAttribute('href', '/Reservations');
  });
});
