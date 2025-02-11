import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axios.get(`${BASE_URL}/categories/allcategories`);
  return response.data.categories;  
});


const categoriesSlice = createSlice({
  name: 'categories',  
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;  
        state.loading = false;  
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message;  
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;  
