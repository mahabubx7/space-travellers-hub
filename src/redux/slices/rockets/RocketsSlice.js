import { createSlice } from '@reduxjs/toolkit';
import { getRockets } from '../../apiSlice';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, { payload }) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return { ...state, data: [...newState] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(getRockets.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
