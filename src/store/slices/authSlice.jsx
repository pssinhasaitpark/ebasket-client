// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false, // Initial state: user is not signed in
  username: '', // Add username here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = true;
      state.username = action.payload.username; // Save username on login
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.username = ''; // Clear username on logout
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
