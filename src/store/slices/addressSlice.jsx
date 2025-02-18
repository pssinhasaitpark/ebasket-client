import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAddresses = createAsyncThunk('addresses/fetchAddresses', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    const response = await axios.get(`${BASE_URL}/address/getalladdress/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createAddress = createAsyncThunk('addresses/createAddress', async (address, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    const response = await axios.post(`${BASE_URL}/address/create/`, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload); 
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addressSlice.reducer;
