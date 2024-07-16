import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './components/BookingForm.js';

const availableTimes = ['17:00', '18:00', '19:00'];

describe('BookingForm Component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  });

  test('renders full name input with correct attributes', () => {
    const nameInput = screen.getByLabelText(/full name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('minLength', '3');
    expect(nameInput).toHaveAttribute('maxLength', '40');
    expect(nameInput).toHaveAttribute('required');
  });

  test('renders email input with correct attributes', () => {
    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
  });

  test('renders date input with correct attributes', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('renders time select with correct attributes', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('required');
    availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('renders guests input with correct attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '2');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
  });

  test('renders occasion select with correct attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalled();
  });

  test('does not submit the form with invalid data', () => {
    // Invalid full name
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jo' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    let submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();

    // Invalid email
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();

    // Invalid date
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();

    // Invalid number of guests
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '11' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});