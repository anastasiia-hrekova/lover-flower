import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import filtersReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    flowers: cardsReducer,
    filter: filtersReducer,
    cart: cartReducer,
  },
});

export default store;
