import { createSlice } from '@reduxjs/toolkit';
import { getMissions } from '../../apiSlice';

const initialState = [];
const Missions = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    join: (state, action) => {
      const newState = state.map((elm) => {
        if (elm.id === action.payload) {
          return { ...elm, reserved: true };
        }
        return elm;
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => action.payload.map((elm) => ({
      ...elm,
      reserved: false,
    })));
  },
});

export default Missions.reducer;
export const { join } = Missions.actions;
