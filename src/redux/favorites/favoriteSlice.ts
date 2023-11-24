import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../api/product/product.types';
import { RootState } from '../store';

export interface IFavoriteState {
  favoriteItems: Array<IProduct>;
}

const initialState: IFavoriteState = {
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload.id;
      const isFavorite = state.favoriteItems.some(p => p.id === productId);
      if (isFavorite) {
        state.favoriteItems = state.favoriteItems.filter(
          p => p.id !== productId,
        );
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export const favoriteItemsSelector = (state: RootState) =>
  state.favorite.favoriteItems;
export default favoriteSlice.reducer;
