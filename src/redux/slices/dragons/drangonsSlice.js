import { createSlice } from '@reduxjs/toolkit';
import getDragons from '../../apiSlice';

const initialState = {
  value: [],
  isLoaded: false,
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const newState = state;
      newState.value = state.value.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        if (dragon.reserved === true) return { ...dragon, reserved: false };
        return { ...dragon, reserved: true };
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.value = action.payload;
    });
  },
});

export const { reserveDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
