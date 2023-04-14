import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducer';
import { cardsSlice } from './components/cards/cards-slice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: combineReducers({
    root: rootReducer,
    cards: cardsSlice.reducer,
  }),
});
