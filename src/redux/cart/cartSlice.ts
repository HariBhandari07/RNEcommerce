import { createSlice } from '@reduxjs/toolkit';
import { ICartProduct } from '../../api/product/product.types';
import { RootState } from '../store';

export interface ICartState {
  cartItems: Array<ICartProduct>;
}

const initialState: ICartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.cartQty < existingItem.stock) {
          existingItem.cartQty += 1;
        }
      } else {
        state.cartItems.push({ ...action.payload, cartQty: 1 });
      }
    },

    subtractFromCart: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem) {
        existingItem.cartQty -= 1;

        if (existingItem.cartQty === 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        }
      }
    },
    // TODO: Can be done, but in design there's no separate functionality to remove item from cart.
    // So, only subtracting item from cart is implemented above. It should remove item if cartQty === 0
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, subtractFromCart, removeFromCart } =
  cartSlice.actions;

// Selectors
export const cartItemCount = (state: RootState) =>
  state.cart.cartItems.reduce((sum, cur) => sum + cur.cartQty, 0);
export default cartSlice.reducer;
