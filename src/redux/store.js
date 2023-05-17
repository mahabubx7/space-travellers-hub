import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './slices/dragons/drangonsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;
