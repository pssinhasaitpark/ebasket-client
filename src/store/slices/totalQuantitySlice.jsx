import { createSlice } from '@reduxjs/toolkit';

const totalQuantitySlice = createSlice({
  name: 'totalQuantity',
  initialState: {
    totalQuantity: 0, 
    loading: false, 
    error: null, 
  },
  reducers: {
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
    resetTotalQuantity: (state) => {
        state.totalQuantity = 0; // Reset to 0
    },
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
    setError: (state, action) => {
      state.error = action.payload; 
    },
  },
});

export const { setTotalQuantity, resetTotalQuantity, setLoading, setError } = totalQuantitySlice.actions;
export default totalQuantitySlice.reducer;

export const updateTotalQuantityAsync = (newQuantity) => async (dispatch) => {
  try {
    dispatch(setLoading(true)); 
    setTimeout(() => {
      dispatch(setTotalQuantity(newQuantity));
      localStorage.setItem('totalQuantity', newQuantity);
      dispatch(setLoading(false)); 
    }, 100);

  } catch (error) {
    dispatch(setError('Error updating total quantity'));
    dispatch(setLoading(false));
  }
};
