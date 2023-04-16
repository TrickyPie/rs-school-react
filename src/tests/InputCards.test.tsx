import { render, screen } from '@testing-library/react';
import { InputCards } from '../components/input-cards-list/InputCardslist';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('InputCards', () => {
  beforeEach(() => {
    const store = mockStore({
      root: {
        formCards: [
          { id: 1, name: 'Card 1' },
          { id: 2, name: 'Card 2' },
          { id: 3, name: 'Card 3' },
        ],
      },
    });

    render(
      <Provider store={store}>
        <InputCards />
      </Provider>
    );
  });

  it('should render all input cards', () => {
    const inputCards = screen.getByTestId('input-cards');
    expect(inputCards).toBeInTheDocument();

    const card1 = screen.getByTestId('card-0');
    expect(card1).toBeInTheDocument();

    const card2 = screen.getByTestId('card-1');
    expect(card2).toBeInTheDocument();

    const card3 = screen.getByTestId('card-2');
    expect(card3).toBeInTheDocument();
  });
});
