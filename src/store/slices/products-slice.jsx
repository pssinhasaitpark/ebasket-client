import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('');
  return response.data.items;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setFilteredItems } = itemsSlice.actions;
export default itemsSlice.reducer;
