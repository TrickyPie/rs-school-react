import FormResult from '../pages/page-form/form-type';
import { store } from '../store';

export const ADD_SEARCH = 'ADD_SEARCH';
export const CLICKED_CARD_ID = 'CLICKED_CARD_ID';
export const RESET_CARD_ID = 'RESET_CARD_ID';
export const SET_FORM_CARDS = 'SET_FORM_CARDS';

export function addSearch(payload: string) {
  return { type: ADD_SEARCH, payload };
}

export function addClickedCardId(payload: number) {
  return { type: CLICKED_CARD_ID, payload };
}

export function resetCardId() {
  return { type: RESET_CARD_ID };
}

export function setFormCards(payload: Omit<FormResult, 'avatar'>[]) {
  const formCards = payload.map((formResult) => {
    return {
      ...formResult,
    };
  });
  return { type: SET_FORM_CARDS, payload: formCards };
}

type defaultStateType = {
  searchTerm: string;
  cardId: number | null;
  formCards: FormResult[];
};

export const defaultState: defaultStateType = {
  searchTerm: '',
  cardId: null,
  formCards: [],
};

type AddSearchAction = {
  type: typeof ADD_SEARCH;
  payload: string;
};

type AddClickedCardId = {
  type: typeof CLICKED_CARD_ID;
  payload: number;
};

type ResetCardIdAction = {
  type: typeof RESET_CARD_ID;
};

type SetFormCards = {
  type: typeof SET_FORM_CARDS;
  payload: FormResult[];
};

export type RootAction = AddSearchAction | AddClickedCardId | ResetCardIdAction | SetFormCards;

export const rootReducer = (state = defaultState, action: RootAction) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };
    case CLICKED_CARD_ID:
      return { ...state, cardId: action.payload };
    case RESET_CARD_ID:
      return { ...state, cardId: null };
    case SET_FORM_CARDS:
      return { ...state, formCards: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof store.getState>;
