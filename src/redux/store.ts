import {configureStore} from '@reduxjs/toolkit';
import {productApi} from '../api/product/productApiSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
