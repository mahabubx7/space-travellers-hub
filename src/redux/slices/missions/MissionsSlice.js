import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    mission_name: 'test1',
    description: 'go to see the web page',
    mission_id: 1,
  },
  {
    mission_name: 'test2',
    description: 'go to see the web page',
    mission_id: 2,
  },
  {
    mission_name: 'test3',
    description: 'go to see the web page',
    mission_id: 3,
  },
];
const Missions = createSlice({
  name: 'Missions',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default Missions.reducer;
