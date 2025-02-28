import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAddresses = createAsyncThunk('addresses/fetchAddresses', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }
  

  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
  
    const response = await axios.get(`${BASE_URL}/address/getalladdress`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    // Check if response.data is valid and not undefined
    if (!response || !response.data) {
      throw new Error('No data returned from the server');
    }
  
    // Return the valid response data
    return response.data;
  } catch (error) {
    // Ensure the error message is valid
    const errorMessage = error.message || 'An unknown error occurred';
    
    // Reject with a valid error message
    return rejectWithValue(errorMessage);
  }
  
});

export const createAddress = createAsyncThunk('addresses/createAddress', async (address, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    const response = await axios.post(`${BASE_URL}/address/create`, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateAddress = createAsyncThunk('addresses/updateAddress', async ({id, updatedData }, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    const response = await axios.put(`${BASE_URL}/address/update/${id}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteAddress = createAsyncThunk('addresses/deleteAddress', async (id, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return rejectWithValue('No token available');
  }

  try {
    await axios.delete(`${BASE_URL}/address/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id; 
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
    // fetch
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload || [];
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      // Create
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
      })
      // .addCase(createAddress.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.addresses.addresses.push(action.payload); 
      // })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(state.addresses)) {
          state.addresses.push(action.payload);
        } else {
          state.addresses = [action.payload];
        }
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.addresses.addresses.findIndex((address) => address?._id === action.payload._id);
        if (index !== -1) {
          state.addresses[index] = action.payload;
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.addresses.filter((address) => address?._id !== action.payload);
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});

export default addressSlice.reducer;
