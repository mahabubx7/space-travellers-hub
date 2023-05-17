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

export default getDragons;
