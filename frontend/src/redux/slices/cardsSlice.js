import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { fetchFlowersAPI } from '../../services/fetchFlowersAPI';

const initialState = {
  items: [],
  isTop: [],
  searchQuery: '',
  isLoading: false,
  error: null,
  hasMore: true,
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
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFlowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length > 0) {
          const newItems = action.payload.filter(
            item =>
              !state.items.some(existingItem => existingItem.id === item.id),
          );
          state.items = [...state.items, ...newItems];
          state.isTop = action.payload.filter(card => card.isTop);
        }
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectFilteredFlowers = createSelector(
  state => state.flowers.items,
  state => state.flowers.searchQuery,
  (flowers, searchQuery) => {
    return flowers.filter(flower =>
      flower?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  },
);

export const selectFlowers = state => state.flowers.items;
export const selectTopFlowers = state => state.flowers.isTop;
export const selectLoading = state => state.flowers.isLoading;
export const selectError = state => state.flowers.error;
export const selectHasMore = state => state.flowers.hasMore;

export const { setSearchQuery } = cardsSlice.actions;
export default cardsSlice.reducer;
