import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isTop: [],
  isLoading: false,
  error: null,
};

export const fetchFlowers = createAsyncThunk(
  'flowers/fetchFlowers',
  async () => {
    const res = await axios.get('http://localhost:4000/flowers');
    return res.data;
  },
);

const cardsSlice = createSlice({
  name: 'flowers',
  initialState,
  reduсers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFlowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.isTop = action.payload.filter(card => card.isTop);
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

export default cardsSlice.reducer;
