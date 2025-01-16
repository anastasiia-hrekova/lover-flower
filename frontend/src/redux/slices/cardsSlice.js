import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFlowersAPI } from '../../services/fetchFlowersAPI';

const initialState = {
  items: [],
  isTop: [],
  isLoading: false,
  error: null,
};

export const fetchFlowers = createAsyncThunk(
  'flowers/fetchFlowers',
  async () => {
    const data = await fetchFlowersAPI();
    return data;
  },
);

const cardsSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFlowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length > 0) {
          state.items = [...state.items, ...action.payload];
          state.isTop = action.payload.filter(card => card.isTop);
        }
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectFlowers = state => state.flowers.items;
export const selectTopFlowers = state => state.flowers.isTop;
export const selectLoading = state => state.flowers.isLoading;
export const selectError = state => state.flowers.error;
export const selectHasMore = state => state.flowers.hasMore;

export default cardsSlice.reducer;
