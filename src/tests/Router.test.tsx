import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../router';
import { store } from '../store';
import { Provider } from 'react-redux';

describe('AppRouter', () => {
  it('renders the home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Home', { selector: 'h2' })).toBeInTheDocument();
  });

  it('renders the about page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about-us']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('About us', { selector: 'h2' })).toBeInTheDocument();
  });

  it('renders the form page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Form', { selector: 'h2' })).toBeInTheDocument();
  });

  it('renders the not found page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some-nonexistent-route']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
