import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PlantModal from '../components/PlantModal/PlantModal';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);

describe('PlantModal', () => {
  it('should show loading spinner when plant data is loading', async () => {
    const store = mockStore({
      root: {
        cardId: 1,
      },
      card: {
        entities: {},
        plantLoading: true,
        plantError: null,
      },
    });

    render(
      <Provider store={store}>
        <PlantModal />
      </Provider>
    );
    await waitFor(() => {
      const loaderElement = screen.getByTestId('loading');
      expect(loaderElement).toBeInTheDocument(), { timeout: 5000 };
      expect(loaderElement).toBeInTheDocument();
    });
  });

  it('should close the modal when the close button is clicked', () => {
    const store = mockStore({
      root: {
        cardId: 1,
      },
      card: {
        entities: {
          1: {
            id: 1,
            title: 'Monstera',
            description: 'A popular indoor plant with large, glossy leaves',
          },
        },
        plantLoading: false,
        plantError: null,
      },
    });

    render(
      <Provider store={store}>
        <PlantModal />
      </Provider>
    );

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });

  it('should close the modal when the overlay is clicked', () => {
    const store = mockStore({
      root: {
        cardId: 1,
      },
      card: {
        entities: {
          1: {
            id: 1,
            title: 'Monstera',
            description: 'A popular indoor plant with large, glossy leaves',
          },
        },
        plantLoading: false,
        plantError: null,
      },
    });

    render(
      <Provider store={store}>
        <PlantModal />
      </Provider>
    );

    const overlay = screen.getByTestId('modal');
    fireEvent.click(overlay);

    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });

  it('should display the correct plant data', () => {
    const store = mockStore({
      root: {
        cardId: 1,
      },
      card: {
        entities: {
          1: {
            id: 1,
            title: 'Monstera',
            description: 'A popular indoor plant with large, glossy leaves',
            petFriendly: true,
            easyCare: false,
            bright: 'Indirect sunlight',
            water: 'Once a week',
            image: 'monstera.jpg',
          },
        },
        plantLoading: false,
        plantError: null,
      },
    });

    render(
      <Provider store={store}>
        <PlantModal />
      </Provider>
    );

    const title = screen.getByTestId('plant-title');
    expect(title).toHaveTextContent('Monstera');

    const description = screen.getByTestId('plant-description');
    expect(description).toHaveTextContent('A popular indoor plant with large, glossy leaves');

    const petFriendly = screen.getByTestId('plant-pet-friendly');
    expect(petFriendly).toBeInTheDocument();

    const easyCare = screen.queryByTestId('plant-easy-care');
    expect(easyCare).not.toBeInTheDocument();

    const bright = screen.getByTestId('plant-bright-info');
    expect(bright).toHaveTextContent('Indirect sunlight');

    const water = screen.getByTestId('plant-water-info');
    expect(water).toHaveTextContent('Once a week');
  });
});
