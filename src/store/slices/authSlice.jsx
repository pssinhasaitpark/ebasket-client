import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false, // Initial state: user is not signed in
  username: '', 
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state,action) => {
      state.isSignedIn = true;
      state.username = action.payload.username; // Save username on sign-up
    
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.username = ''; // Clear username on logout
    },
    signUp: (state, action) => {
      state.isSignedIn = true;  // Set user as signed in after successful sign-up
      state.username = action.payload.username; // Save username on sign-up
    },
  },
});

export const { signIn, signOut, signUp } = authSlice.actions;
export default authSlice.reducer;
