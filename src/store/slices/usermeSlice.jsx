import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const fetchUserMe = createAsyncThunk(
  'userMe/fetchUserMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data.user; 
    } catch (error) {
      return rejectWithValue('Failed to fetch user data'); 
    }
  }
);

const userMeSlice = createSlice({
  name: 'userMe',
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMe.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchUserMe.fulfilled, (state, action) => {
        state.userData = action.payload; 
        state.loading = false;
      })
      .addCase(fetchUserMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

// Export actions and reducer
export default userMeSlice.reducer;
