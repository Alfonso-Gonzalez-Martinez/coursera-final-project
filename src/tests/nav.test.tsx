import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { BrowserRouter as Router } from 'react-router-dom'; 
import '@testing-library/jest-dom';

describe('Nav Component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
  });

  test('displays the logo image', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
    const logoElement = screen.getByAltText('little lemon logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', expect.stringContaining('logo.svg'));
  });

  test('displays the navigation links', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const ordersOnlineLink = screen.getByText('Orders online');
    const loginLink = screen.getByText('Log in');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(ordersOnlineLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  test('navigation links have the correct href attributes', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const ordersOnlineLink = screen.getByText('Orders online');
    const loginLink = screen.getByText('Log in');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/About');
    expect(menuLink).toHaveAttribute('href', '/');
    expect(reservationsLink).toHaveAttribute('href', '/Reservations');
    expect(ordersOnlineLink).toHaveAttribute('href', '/');
    expect(loginLink).toHaveAttribute('href', '/');
  });
});
