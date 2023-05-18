import { createSlice } from '@reduxjs/toolkit';
import { getRockets } from '../../apiSlice';

const initialState = {
  data: [],
  loading: false,
  isLoaded: false,
  error: null,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, { payload }) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, data: [...newState] };
    },
    cancel: (state, { payload }) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: false };
        return rocket;
      });
      return { ...state, data: [...newState] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.isLoaded = true;
      state.loading = false;
      state.data = [...payload];
      state.error = null;
    });
    builder.addCase(getRockets.rejected, (state, { payload }) => {
      state.isLoaded = false;
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { reserve, cancel } = rocketSlice.actions;
export default rocketSlice.reducer;
