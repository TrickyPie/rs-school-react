import { Card, Plant } from '../../components/card/Card';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultState, RootState } from '../../redux/reducer';
import { setError, setSearchCards } from './cards-slice';
import { fetchCards } from './thunk';
import { cardsSlice, CardsState, selectSearchCards } from './cards-slice';
import { Action, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { addSearch } from '../../redux/actions';
import { ThunkAction } from 'redux-thunk';
import { AppDispatch } from '../../store';

export const useAppDispatch = () => useDispatch();

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: typeof defaultState) => state.searchTerm);
  const searchCards = useSelector(selectSearchCards);
  const isLoading = useSelector((state: typeof defaultState) => state.searchCards);
  const error = useSelector((state: typeof defaultState) => state.searchCards);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(addSearch(searchTerm));
    if (searchTerm) {
      dispatch(fetchCards(searchTerm));
    } else {
      dispatch(setSearchCards([]));
    }
  };

  if (isLoading) {
    return <div data-testid="loading-message">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error-message">{error.error}</div>;
  }

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearchInputChange} />
      {searchCards.map((plant: Plant) => (
        <Card
          key={plant.id}
          data-testid={`card-${plant.id}`}
          id={plant.id}
          image={plant.image}
          title={plant.title}
          petFriendly={plant.petFriendly}
          easyCare={plant.easyCare}
        />
      ))}
    </>
  );
};
