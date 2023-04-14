import { store } from '../store';

export const ADD_SEARCH = 'ADD_SEARCH';

export function addSearch(payload: string) {
  return { type: ADD_SEARCH, payload };
}

export const defaultState: defaultStateType = {
  searchTerm: '',
};

export type RootState = ReturnType<typeof store.getState>;

type defaultStateType = {
  searchTerm: string;
};

type AddSearchAction = {
  type: typeof ADD_SEARCH;
  payload: string;
};

export type RootAction = AddSearchAction;

export const rootReducer = (state = defaultState, action: RootAction) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };

    default:
      return state;
  }
};
