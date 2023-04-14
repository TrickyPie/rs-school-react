import { Card, Plant } from '../../components/card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCards } from './cards-slice';
import { fetchCards } from './thunk';
import { selectSearchCards } from './cards-slice';
import { AppDispatch } from '../../store';
import React from 'react';
import { addSearch, RootState } from '../../redux/reducer';
import Loader from '../../components/loader/Loader';

export const useAppDispatch = () => useDispatch();

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.root.searchTerm);
  const searchCards = useSelector(selectSearchCards);
  const allCards = useSelector(selectAllCards);
  const isLoading = useSelector((state: RootState) => state.cards.isLoading);
  const error = useSelector((state: RootState) => state.cards.error);

  useEffect(() => {
    dispatch(addSearch(searchTerm));
    if (searchTerm !== '') {
      dispatch(fetchCards(searchTerm));
    } else {
      dispatch(fetchCards(''));
    }
  }, [dispatch, searchTerm]);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="not-found" data-testid="error-message">
        Sorry, we have problem with API. Please, try later.
      </div>
    );
  }

  let cardsToRender: Plant[];

  if (searchTerm && searchCards.length === 0) {
    return (
      <div className="not-found" data-testid="no-results-message">
        No results found
      </div>
    );
  } else if (!searchTerm) {
    cardsToRender = allCards;
  } else {
    cardsToRender = searchCards;
  }

  return (
    <>
      {cardsToRender &&
        cardsToRender.map((plant: Plant) => (
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
