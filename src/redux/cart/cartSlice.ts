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
      const { id, cartQty } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        // If the item is already in the cart, increase cartQty by 1 (up to stock)
        if (existingItem.cartQty < existingItem.stock) {
          existingItem.cartQty += 1;
        }
      } else {
        // If the item is not in the cart, add it with cartQty 1
        state.cartItems.push({ ...action.payload, cartQty: 1 });
      }
    },

    subtractFromCart: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem) {
        // If the item is in the cart, decrease cartQty by 1 (down to 0)
        existingItem.cartQty -= 1;

        // If cartQty becomes 0, remove the item from the cart
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
