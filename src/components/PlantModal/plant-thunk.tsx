import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../redux/reducer';
import { Plant } from '../card/Card';
import { PlantsState, setPlantLoading } from './plant-slice';

export const fetchPlantById = createAsyncThunk<
  Plant,
  number,
  {
    rejectValue: { message: string };
    state: RootState;
  }
>('plants/fetchPlantById', async (plantId: number, { rejectWithValue, dispatch }) => {
  const apiUrl = `https://my-json-server.typicode.com/TrickyPie/react-api/items/?id=${plantId}`;

  try {
    dispatch(setPlantLoading(true));
    const response: Response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Not found');
    }
    const data: PlantsState = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Response data is not valid');
    }
    dispatch(setPlantLoading(false));
    return data[0];
  } catch (error) {
    dispatch(setPlantLoading(false));
    return rejectWithValue({ message: (error as Error).message });
  }
});
