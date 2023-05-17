/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getDragons = createAsyncThunk('getDragons', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v4/dragons');
    return res.data.map((item) => (
      {
        id: crypto.randomUUID(),
        description: item.description,
        name: item.name,
        type: item.type,
        image: item.flickr_images[0],
      }
    ));
  } catch (e) {
    throw new Error(e);
  }
});

export const getMissions = createAsyncThunk('getMissions', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    return res.data.map((mission) => (
      {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }
    ));
  } catch (e) {
    throw new Error(e);
  }
});

export default getDragons;
