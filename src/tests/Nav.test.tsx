import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from '../components/nav/Nav';
import { NavigationLinks } from '../components/nav/nav-type';

describe('Nav', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText(NavigationLinks.HOME)).toBeInTheDocument();
    expect(screen.getByText(NavigationLinks.ABOUT)).toBeInTheDocument();
    expect(screen.getByText(NavigationLinks.FORM)).toBeInTheDocument();
  });

  it('navigates to correct routes when links are clicked', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(NavigationLinks.HOME);
    const aboutLink = screen.getByText(NavigationLinks.ABOUT);
    const formLink = screen.getByText(NavigationLinks.FORM);

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about-us');
    expect(formLink).toHaveAttribute('href', '/form');
  });
});
