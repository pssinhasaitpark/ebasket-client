import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,  // Load token from localStorage if exists
  isSignedIn: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = true;
      state.username = action.payload.username; // Save username on sign-in
      state.token = action.payload.token; // Save token on sign-in
      // localStorage.setItem('token', action.payload.token);  // Store token in localStorage
      // console.log('SignIn action payload:', action.payload.token);
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.username = '';
      state.token = null; // Clear token on sign-out
      localStorage.removeItem('token'); // Remove token from localStorage
    },
    signUp: (state, action) => {
      state.isSignedIn = true; // Set user as signed in after successful sign-up
      state.username = action.payload.username; // Save username on sign-up
      state.token = action.payload.token; // Save token on sign-up
      // localStorage.setItem('token', action.payload.token); // Store token in localStorage
    },
  },
});

export const { signIn, signOut, signUp } = authSlice.actions;
export default authSlice.reducer;
