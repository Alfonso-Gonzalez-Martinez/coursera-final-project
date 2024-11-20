import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Specials from '../components/Specials';
import { SPECIALS } from '../helpers/specials';
import '@testing-library/jest-dom';

jest.mock('../helpers/specials', () => ({
    SPECIALS: [
        {
            title: 'Pizza Margherita',
            price: '8.99',
            description: 'Classic pizza with mozzarella and tomato sauce.',
            img: 'pizza.jpg',
        },
        {
            title: 'Spaghetti Carbonara',
            price: '12.99',
            description: 'Pasta with eggs, cheese, pancetta, and pepper.',
            img: 'carbonara.jpg',
        },
    ],
}));

describe('Specials Component', () => {
  test('renders without crashing', () => {
    render(
    <Router>
        <Specials />
    </Router>);
  });

  test('displays "This Week\'s Specials" title', () => {
    render(
    <Router>
        <Specials />
    </Router>);
    const titleElement = screen.getByText("This Week's Specials");
    expect(titleElement).toBeInTheDocument();
  });

  test('displays "Online Menu" button', () => {
    render(
    <Router>
        <Specials />
    </Router>);
    const buttonElement = screen.getByLabelText('Online Menu');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders specials list with correct number of items', () => {
    render(
    <Router>
        <Specials />
    </Router>);
    const specialCards = screen.getAllByRole('link');
    expect(specialCards.length).toBe(SPECIALS.length);
  });

  test('displays correct information for each special', () => {
    render(
    <Router>
        <Specials />
    </Router>);

    SPECIALS.forEach((special, index) => {
      const titleElement = screen.getByText(special.title);
      const priceElement = screen.getByText(`${special.price}€`);
      const descriptionElement = screen.getByText(special.description);
      const linkElement = screen.getAllByRole('link')[index];

      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '/');
    });
  });
});
