import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../redux/reducer';
import { AppDispatch } from '../store';
import { Cards } from '../components/cards/Cards';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore<RootState, AppDispatch>([thunk]);

describe('Cards component', () => {
  it('renders all cards when there is no search term', async () => {
    const store = mockStore({
      root: { searchTerm: '' },
      cards: {
        isLoading: false,
        error: null,
        cards: [],
        searchCards: [],
        selectAllCards: [
          { id: '1', name: 'Card 1', imageUrl: 'http://example.com/card1.jpg' },
          { id: '2', name: 'Card 2', imageUrl: 'http://example.com/card2.jpg' },
          { id: '3', name: 'Card 3', imageUrl: 'http://example.com/card3.jpg' },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    await waitFor(
      () => {
        const cards = screen.getAllByTestId('card-test');
        expect(cards).toHaveLength(3);
      },
      { timeout: 5000 }
    );
  });

  it('renders only matching cards when searchTerm is not an empty string', async () => {
    const store = mockStore({
      root: { searchTerm: 'Card 2' },
      cards: {
        isLoading: false,
        error: null,
        cards: [],
        searchCards: [{ id: '2', name: 'Card 2', imageUrl: 'http://example.com/card2.jpg' }],
        selectAllCards: [],
      },
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    await waitFor(
      () => {
        const cards = screen.getByTestId('card-test');
        expect(cards).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it('renders an error message when there is an error', async () => {
    const store = mockStore({
      root: { searchTerm: '' },
      cards: {
        isLoading: false,
        error: 'There was an error',
        cards: [],
        searchCards: [],
        selectAllCards: [],
      },
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    const errorMessage = await screen.findByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Sorry, we have problem with API. Please, try later.');
  });

  it('renders a "no results found" message when there are no matching cards', async () => {
    const store = mockStore({
      root: { searchTerm: 'Non-existent card' },
      cards: {
        isLoading: false,
        error: null,
        cards: [],
        searchCards: [],
        selectAllCards: [
          { id: '1', name: 'Card 1', imageUrl: 'http://example.com/card1.jpg' },
          { id: '2', name: 'Card 2', imageUrl: 'http://example.com/card2.jpg' },
          { id: '3', name: 'Card 3', imageUrl: 'http://example.com/card3.jpg' },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    const noResultsMessage = await screen.findByTestId('no-results-message');
    expect(noResultsMessage).toBeInTheDocument();
    expect(noResultsMessage).toHaveTextContent('No results found');
  });

  it('renders a loader when isLoading is true', async () => {
    const store = mockStore({
      root: { searchTerm: '' },
      cards: {
        isLoading: true,
        error: null,
        cards: [],
        searchCards: [],
        selectAllCards: [],
      },
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    const loader = await screen.findByTestId('loading');
    expect(loader).toBeInTheDocument();
  });
});
