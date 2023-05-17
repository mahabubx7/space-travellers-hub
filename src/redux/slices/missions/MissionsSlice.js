// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';
import { getMissions } from '../../apiSlice';

const initialState = [];
const Missions = createSlice({
  name: 'Missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => action.payload);
  },
});

export default Missions.reducer;
