import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from 'components/card/Card';
import { RootState } from '../../redux/reducer';
import { fetchCards } from './thunk';

export interface CardsState {
  searchCards: Plant[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: CardsState = {
  searchCards: [],
  isLoading: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSearchCards: (state, action: PayloadAction<Plant[]>) => {
      state.searchCards = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchCards = action.payload;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message ?? 'An error occurred';
    });
  },
});

export const { setSearchCards, setLoading, setError } = cardsSlice.actions;

export const selectSearchCards = (state: RootState) => state.cards.searchCards;

export default cardsSlice.reducer;
