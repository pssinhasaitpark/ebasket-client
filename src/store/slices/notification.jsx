import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchNotification = createAsyncThunk(
  'notification/fetchNotifications', 
  async () => {
    const response = await axios.get(`${BASE_URL}/notification/get-allnotification`);
    return response.data.allNotification || []; 
  }
);

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],  
    loading: false,      
    error: null,
    sortOrder: 'desc',
  },
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
      if (state.sortOrder === 'desc') {
        state.notifications = [...state.notifications].sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA; // Newest first
        });
      } else {
        state.notifications = [...state.notifications].sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB; // Oldest first
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotification.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotification.fulfilled, (state, action) => {
        state.notifications = action.payload;
        state.loading = false;
        if (state.sortOrder === 'desc') {
          state.notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else {
          state.notifications.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
      })
      .addCase(fetchNotification.rejected, (state, action) => {
        state.error = action.error.message; 
        state.loading = false;
      });
  },
});

export const { setSortOrder } = notificationSlice.actions;

export default notificationSlice.reducer;
