import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });

  test('navigates to About page when clicking "About" link', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const aboutLink = screen.getAllByText('About');
    fireEvent.click(aboutLink[0]);
    expect(screen.getByText('About Little Lemon Restaurant')).toBeInTheDocument();
  });

  test('navigates to Home page when clicking "Home" link', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homeLink = screen.getAllByText('Home');
    fireEvent.click(homeLink[0]);

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });

  test('navigates to Reservations page when clicking "Reservations" link', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const reservationsLink = screen.getByRole('button',{name: 'Reserve a Table'});
    fireEvent.click(reservationsLink);

    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });

  test('renders Footer and Nav components', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const footerElement = screen.getByTestId('nav-container');
    expect(footerElement).toBeInTheDocument();
  });

});
