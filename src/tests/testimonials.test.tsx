import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';
import '@testing-library/jest-dom';

jest.mock('../helpers/reviews', () => ({
  REVIEWS: [
    {
      rating: 5,
      name: 'John Doe',
      review: 'Excellent service!',
      img: 'https://example.com/john.jpg',
    },
    {
      rating: 4,
      name: 'Jane Smith',
      review: 'Very good, will return.',
      img: 'https://example.com/jane.jpg',
    },
  ],
}));

describe('Testimonials Component', () => {
  test('renders Testimonials component with reviews', () => {
    render(<Testimonials />);
    expect(screen.getByText('Testimonials')).toBeInTheDocument();

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Excellent service!')).toBeInTheDocument();

    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Very good, will return.')).toBeInTheDocument();
  });

  test('renders correct images for each review', () => {
    render(<Testimonials />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute('src', 'https://example.com/john.jpg');
    expect(images[0]).toHaveAttribute('alt', 'John Doe');

    expect(images[1]).toHaveAttribute('src', 'https://example.com/jane.jpg');
    expect(images[1]).toHaveAttribute('alt', 'Jane Smith');
  });
});
