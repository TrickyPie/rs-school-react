import { createAsyncThunk } from '@reduxjs/toolkit';
import { Plant } from '../../components/card/Card';
import { RootState } from '../../redux/reducer';
import { setSearchCards, setLoading, setError } from './cards-slice';

export const fetchCards = createAsyncThunk<
  Plant[],
  string,
  {
    rejectValue: { message: string };
    state: RootState;
  }
>('cards/fetchCards', async (searchTerm, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    const response = await fetch(
      `https://my-json-server.typicode.com/TrickyPie/react-api/items/?title_like=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error('No results found');
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('Response data is not an array');
    }
    thunkAPI.dispatch(setLoading(false));
    return data;
  } catch (error) {
    thunkAPI.dispatch(setLoading(false));
    return thunkAPI.rejectWithValue({ message: (error as Error).message });
  }
});
