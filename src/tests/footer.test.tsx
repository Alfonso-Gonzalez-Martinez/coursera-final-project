import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  test('displays the logo image', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText('Restaurant logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', expect.stringContaining('logo-edit.png'));
  });

  test('displays the Navigation section with correct links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const navigationTitle = screen.getByText('Navigation');
    expect(navigationTitle).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const orderOnlineLink = screen.getByText('Order Online');
    const loginLink = screen.getByText('Log in');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderOnlineLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  test('displays the Contact section with correct links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const contactTitle = screen.getByText('Contact');
    expect(contactTitle).toBeInTheDocument();

    const addressLink = screen.getByText('Adress');
    const phoneLink = screen.getByText('Phone Number');
    const emailLink = screen.getByText('Email');

    expect(addressLink).toBeInTheDocument();
    expect(phoneLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  test('displays the Social Media section with correct links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const socialMediaTitle = screen.getByText('Social Media');
    expect(socialMediaTitle).toBeInTheDocument();

    const facebookLink = screen.getByText('Facebook');
    const instagramLink = screen.getByText('Instagram');
    const youtubeLink = screen.getByText('Youtube');

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();
  });

  test('footer links have the correct href attributes', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const menuLink = screen.getByText('Menu');
    const reservationsLink = screen.getByText('Reservations');
    const orderOnlineLink = screen.getByText('Order Online');
    const loginLink = screen.getByText('Log in');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/About');
    expect(menuLink).toHaveAttribute('href', '/');
    expect(reservationsLink).toHaveAttribute('href', '/Reservations');
    expect(orderOnlineLink).toHaveAttribute('href', '/');
    expect(loginLink).toHaveAttribute('href', '/');

    const addressLink = screen.getByText('Adress');
    const phoneLink = screen.getByText('Phone Number');
    const emailLink = screen.getByText('Email');

    expect(addressLink).toHaveAttribute('href', '/');
    expect(phoneLink).toHaveAttribute('href', '/');
    expect(emailLink).toHaveAttribute('href', '/');

    const facebookLink = screen.getByText('Facebook');
    const instagramLink = screen.getByText('Instagram');
    const youtubeLink = screen.getByText('Youtube');

    expect(facebookLink).toHaveAttribute('href', '/');
    expect(instagramLink).toHaveAttribute('href', '/');
    expect(youtubeLink).toHaveAttribute('href', '/');
  });
});
