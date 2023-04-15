import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducer';
import { cardsSlice } from './components/cards/cards-slice';
import { plantSlice } from './components/PlantModal/plant-slice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: combineReducers({
    root: rootReducer,
    cards: cardsSlice.reducer,
    card: plantSlice.reducer,
  }),
});
