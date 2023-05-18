import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './slices/dragons/drangonsSlice';
import MissionsReducer from './slices/missions/MissionsSlice';
import RocketsReducer from './slices/rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: MissionsReducer,
    rockets: RocketsReducer,
  },
});

export default store;
