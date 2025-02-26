import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createorders = createAsyncThunk(
  'orders/createorders',
  async (orderData, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return rejectWithValue('No token available');
    }

    try {
      const response = await axios.post(`${BASE_URL}/orders/createorders`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      const message = error.response ? error.response.data : error.message;
      return rejectWithValue(message); 
    }
  }
);

export const getorders = createAsyncThunk(
  'orders/getallorder',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return rejectWithValue('No token available');
    }

    try {
      const response = await axios.get(`${BASE_URL}/orders/getallorder`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      console.log('repsonse132465789',response.data);
      return response.data;
    } catch (error) {
      const message = error.response ? error.response.data : error.message;
      return rejectWithValue(message); 
    }
  }
);

const initialState = {
  orders: [],
  loading: false,
  error: null,
  orderDetails: null,
  status: 'idle',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: { 
    setOrders(state, action) {
      state.orders = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    //fetch
    // getorders actions
      .addCase(getorders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload || [];
      })
      .addCase(getorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    //create
      .addCase(createorders.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
        state.orderDetails = action.payload; 
      })
      .addCase(createorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default orderSlice.reducer;
