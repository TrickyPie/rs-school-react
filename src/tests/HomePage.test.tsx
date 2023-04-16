import { render, screen } from '@testing-library/react';
import { MainPage } from '../pages/page-home/page-home';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('MainPage component', () => {
  it('renders all child components', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    const searchComponent = screen.getByTestId('search');
    const cardsComponent = screen.getByTestId('cards-container');

    expect(searchComponent).toBeInTheDocument();
    expect(cardsComponent).toBeInTheDocument();
  });
});
