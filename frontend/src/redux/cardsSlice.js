// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import createCardWithID from '../utils/createCardWithID';

// const initialState = [];

// export const fetchCard = createAsyncThunk('flowers/fetchCard', async () => {
//   const res = await axios.get('http://localhost:4000/flowers');
//   return res.data;
// });

// const cardsSlice = createSlice({
//   name: 'flowers',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(fetchCard.fulfilled, (state, action) => {
//       if (
//         action.payload.title &&
//         action.payload.price &&
//         action.payload.image
//       ) {
//         state.push(createCardWithID(action.payload));
//       }
//     });
//   },
// });
