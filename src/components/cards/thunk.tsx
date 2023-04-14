import { createAsyncThunk } from '@reduxjs/toolkit';
import { Plant } from '../../components/card/Card';
import { RootState } from '../../redux/reducer';
import { setLoading } from './cards-slice';

export const fetchCards = createAsyncThunk<
  Plant[],
  string,
  {
    rejectValue: { message: string };
    state: RootState;
  }
>('cards/fetchCards', async (searchTerm: string, { rejectWithValue, dispatch }) => {
  const apiUrl = searchTerm
    ? `https://my-json-server.typicode.com/TrickyPie/react-api/items/?title_like=${searchTerm}`
    : 'https://my-json-server.typicode.com/TrickyPie/react-api/items/?title_like=';

  console.log('searchTerm', searchTerm, 'apiUrl', apiUrl);

  try {
    dispatch(setLoading(true));
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('No results found');
    }
    const data = await response.json();
    console.log(data);
    if (!Array.isArray(data)) {
      throw new Error('Response data is not an array');
    }
    dispatch(setLoading(false));
    return data;
  } catch (error) {
    dispatch(setLoading(false));
    return rejectWithValue({ message: (error as Error).message });
  }
});
