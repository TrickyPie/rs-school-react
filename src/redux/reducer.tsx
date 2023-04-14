import { store } from '../store';
import { Plant } from '../components/card/Card';
import { CardsState, initialState } from '../components/cards/cards-slice';
import { ADD_CARDS, ADD_SEARCH } from './actions';

export const defaultState: defaultStateType = {
  searchTerm: '',
  searchCards: initialState,
};

type defaultStateType = {
  searchTerm: string;
  searchCards: CardsState;
};

type AddSearchAction = {
  type: typeof ADD_SEARCH;
  payload: string;
};

type AddCardsAction = {
  type: typeof ADD_CARDS;
  payload: Plant[];
};

export type RootAction = AddSearchAction | AddCardsAction;

export type RootState = ReturnType<typeof store.getState>;

export const rootReducer = (state = defaultState, action: RootAction) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };
    case ADD_CARDS:
      return { ...state, searchCards: action.payload };

    default:
      return state;
  }
};
