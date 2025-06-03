import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderCreated: false,  
};

const orderCreatedSlice = createSlice({
  name: 'orderCreated',
  initialState,
  reducers: {
    setOrderCreated: (state) => {
      state.orderCreated = true;
    },
    resetOrderCreated: (state) => {
      state.orderCreated = false; 
    },
  },
});

export const { setOrderCreated, resetOrderCreated } = orderCreatedSlice.actions;
export default orderCreatedSlice.reducer;
