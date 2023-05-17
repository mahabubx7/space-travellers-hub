import { createSlice } from '@reduxjs/toolkit';
import getDragons from '../../apiSlice';

const initialState = {
  value: [],
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default dragonsSlice.reducer;
