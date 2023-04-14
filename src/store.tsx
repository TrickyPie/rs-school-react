import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './components/cards/cards-slice';
import { rootReducer } from './redux/reducer';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: combineReducers({
    root: rootReducer,
    cards: cardsSlice.reducer,
  }),
});
