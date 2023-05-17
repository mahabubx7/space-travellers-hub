// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './slices/dragons/drangonsSlice';
import MissionsReducer from './slices/missions/MissionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: MissionsReducer,
  },
});

export default store;
