import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import filtersReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    flowers: cardsReducer,
    filter: filtersReducer,
  },
});

export default store;
