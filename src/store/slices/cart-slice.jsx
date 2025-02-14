import { createSlice } from '@reduxjs/toolkit';

// Helper function to calculate total quantity
const calculateTotalQuantity = (items) => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  totalQuantity: 0,  // Initialize with 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, variantQuantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item._id === product._id);

      if (existingItemIndex >= 0) {
        // Update item quantity and variant quantity
        state.items[existingItemIndex].quantity += quantity;
        state.items[existingItemIndex].variantQuantity = variantQuantity;
      } else {
        // Add new item to cart
        state.items.push({
          ...product,
          quantity,
          variantQuantity,
        });
      }

      // Recalculate totalQuantity after adding item
      state.totalQuantity = calculateTotalQuantity(state.items);

      // Update localStorage with the updated cart items
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.items.filter(item => item._id !== action.payload);
      state.items = updatedCart;

      // Recalculate totalQuantity after removal
      state.totalQuantity = calculateTotalQuantity(state.items);

      // Update localStorage with the updated cart items
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item._id === productId);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;

        // Recalculate totalQuantity after quantity update
        state.totalQuantity = calculateTotalQuantity(state.items);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
