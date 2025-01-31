import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories-slice';  
import brandsReducer from './slices/brands-slice';
import itemsReducer from './slices/products-slice'
import authReducer from './slices/authSlice';
const store = configureStore({
  reducer: {
    categories: categoriesReducer,  
    brands: brandsReducer,
    items: itemsReducer,
    auth :authReducer,
  },
});

export default store;  

