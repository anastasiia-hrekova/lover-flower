import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  flowerType: [],
  flowerColor: [],
  colorShade: [],
  format: [],
  price: { min: 0, max: 2000 },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.flowerType = action.payload;
    },
    setColorFilter: (state, action) => {
      state.flowerColor = action.payload;
    },
    setColorShadeFilter: (state, action) => {
      state.colorShade = action.payload;
    },
    setFormatFilter: (state, action) => {
      state.format = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = { ...state.price, ...action.payload };
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setTypeFilter,
  setColorFilter,
  setColorShadeFilter,
  setFormatFilter,
  setPriceFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = state => state.filter.title;
export const selectTypeFilter = state => state.filter.flowerType;
export const selectColorFilter = state => state.filter.flowerColor;
export const selectColorShadeFilter = state => state.filter.colorShade;
export const selectFormatFilter = state => state.filter.format;
export const selectPriceFilter = state => state.filter.price;

export default filterSlice.reducer;
