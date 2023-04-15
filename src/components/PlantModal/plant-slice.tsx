import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../../components/card/Card';
import { fetchPlantById } from './plant-thunk';

export interface PlantsState {
  entities: { [id: number]: Plant };
  plantLoading: boolean;
  plantError: string | null;
}

const initialState: PlantsState = {
  entities: {},
  plantLoading: false,
  plantError: null,
};

export const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setPlantData: (state, action: PayloadAction<Plant>) => {
      state.entities = action.payload;
    },
    setPlantLoading: (state, action: PayloadAction<boolean>) => {
      state.plantLoading = action.payload;
    },
    setPlantError: (state, action: PayloadAction<string | null>) => {
      state.plantError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlantById.pending, (state) => {
        state.plantLoading = true;
        state.plantError = null;
      })
      .addCase(fetchPlantById.fulfilled, (state, action) => {
        state.entities = {
          ...state.entities,
          [action.payload.id]: action.payload,
        };
        state.plantLoading = false;
        state.plantError = null;
      })
      .addCase(fetchPlantById.rejected, (state, action) => {
        state.plantLoading = false;
        state.plantError = action.payload?.message ?? 'Something went wrong';
      });
  },
});

export const { setPlantData, setPlantLoading, setPlantError } = plantSlice.actions;

export default plantSlice.reducer;
