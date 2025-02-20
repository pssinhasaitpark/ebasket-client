import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';

import categoriesReducer from './slices/categories-slice';
import brandsReducer from './slices/brands-slice';
import itemsReducer from './slices/products-slice';
import authReducer from './slices/authSlice';
import couponsReducer from './slices/coupons.slice';
import cartReducer from './slices/cart-slice';
import addressesReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice';
import usermeReducer from './slices/usermeSlice';

const persistConfig = {
  key: 'root',  
  storage,      
  whitelist: ['auth'], 
};


const rootReducer = combineReducers({
  categories: categoriesReducer,
  brands: brandsReducer,
  items: itemsReducer,
  auth: authReducer,  
  coupons: couponsReducer,
  cart: cartReducer,
  addresses: addressesReducer,
  Order : orderReducer,
  userMe: usermeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, 
});

const persistor = persistStore(store);

export { store, persistor };
