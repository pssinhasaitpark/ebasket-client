import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createorders = createAsyncThunk('orders/createorders', async (orders, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    const response = await axios.post(`${BASE_URL}/orders/createorders`, orders, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',  
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createorders.pending, (state) => {
        state.loading = true;
      })
      .addCase(createorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);  // Storing the created order in the state
      })
      .addCase(createorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
