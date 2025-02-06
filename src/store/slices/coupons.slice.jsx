import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  coupons: [],
  loading: false,
  error: null,
};

export const getCoupons = createAsyncThunk('coupons/getCoupons', async () => {
  try {
    const response = await fetch('http://192.168.0.111:3001/coupon/allcoupons');
    const data = await response.json();
    return data.coupons;
  } catch (error) {
    throw Error('Failed to fetch coupons');
  }
});

const couponsSlice = createSlice({
  name: 'coupons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export { getCoupons };
export default couponsSlice.reducer;
