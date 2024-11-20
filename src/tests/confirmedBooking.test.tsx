import { render, screen } from '@testing-library/react';
import ConfirmedBooking from '../components/ConfirmedBooking';
import '@testing-library/jest-dom';

describe('ConfirmedBooking Component', () => {
  test('renders without crashing', () => {
    render(<ConfirmedBooking />);
  });

  test('displays the Booking Received heading', () => {
    render(<ConfirmedBooking />);

    const headingElement = screen.getByText('Booking Received');
    expect(headingElement).toBeInTheDocument();
  });

  test('displays the confirmation message', () => {
    render(<ConfirmedBooking />);

    const messageElement = screen.getByText('Thank you for your booking!');
    expect(messageElement).toBeInTheDocument();
  });
});
