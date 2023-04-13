import { createSlice } from '@reduxjs/toolkit';
import { ADD_SEARCH, GET_SEARCH } from './actions';

const defaultState = {
  searchTerm: '',
};

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = (state = defaultState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, searchTerm: action.payload };
    case GET_SEARCH:
      return { ...state, searchTerm: state.searchTerm };

    default:
      return state;
  }
};
