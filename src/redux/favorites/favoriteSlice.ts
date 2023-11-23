import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../api/product/product.types';

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
    addToFavorite: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
    removeFromFavorite: (state, action) => {},
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
