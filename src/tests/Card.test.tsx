import React from 'react';
import { fireEvent, queryByTestId, render } from '@testing-library/react';
import { Card, Plant } from '../components/card/Card';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { vi } from 'vitest';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Card component', () => {
  it('renders the card with the right data', () => {
    const plant: Plant = {
      id: 1,
      image: ['https://example.com/image.jpg'],
      title: 'Example Plant',
      petFriendly: true,
      easyCare: true,
    };

    const { getByTestId } = render(
      <Provider store={store}>
        <Card
          id={plant.id}
          image={plant.image}
          title={plant.title}
          petFriendly={plant.petFriendly}
          easyCare={plant.easyCare}
        />
      </Provider>
    );

    expect(getByTestId('card-test')).toBeInTheDocument();
    expect(getByTestId('title')).toHaveTextContent(plant.title);
    expect(getByTestId('pet-friendly-icon')).toBeInTheDocument();
    expect(getByTestId('easy-care-icon')).toBeInTheDocument();
  });

  it('renders the card with the right data if easy care is false', () => {
    const plant: Plant = {
      id: 1,
      image: ['https://example.com/image.jpg'],
      title: 'Example Plant',
      petFriendly: true,
      easyCare: false,
    };

    render(
      <Provider store={store}>
        <Card
          id={plant.id}
          image={plant.image}
          title={plant.title}
          petFriendly={plant.petFriendly}
          easyCare={plant.easyCare}
        />
      </Provider>
    );

    expect(queryByTestId(document.body, 'easy-care-icon')).not.toBeInTheDocument();
  });

  it('dispatches an action to the store when clicked', () => {
    const plant: Plant = {
      id: 1,
      image: ['https://example.com/image.jpg'],
      title: 'Example Plant',
      petFriendly: true,
      easyCare: false,
    };

    const dispatchSpy = vi.spyOn(store, 'dispatch');

    const { getByTestId } = render(
      <Provider store={store}>
        <Card
          id={plant.id}
          image={plant.image}
          title={plant.title}
          petFriendly={plant.petFriendly}
          easyCare={plant.easyCare}
        />
      </Provider>
    );

    fireEvent.click(getByTestId('card-test'));

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
});
