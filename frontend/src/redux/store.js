import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';

const store = configureStore({
  reducer: {
    flowers: cardsReducer,
  },
});

export default store;
