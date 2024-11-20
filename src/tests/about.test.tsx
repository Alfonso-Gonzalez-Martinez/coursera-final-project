import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import '@testing-library/jest-dom';

describe('About Component', () => {
  test('renders without crashing', () => {
    render(<About />);
  });

  test('displays three images with correct alt texts', () => {
    render(<About />);

    const image1 = screen.getByAltText('Chef sprinkling the final touches in a dish');
    const image2 = screen.getByAltText('A cook holding a dish');
    const image3 = screen.getByAltText('A side view of the terrace of the restaurant');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(image3).toBeInTheDocument();
  });

  test('displays the About Little Lemon Restaurant heading', () => {
    render(<About />);

    const headingElement = screen.getByText('About Little Lemon Restaurant');
    expect(headingElement).toBeInTheDocument();
  });

  test('displays the restaurant description paragraph', () => {
    render(<About />);

    const paragraphElement = screen.getByText(/Nestled in the heart of Chicago/);
    expect(paragraphElement).toBeInTheDocument();
  });
});
