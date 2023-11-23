import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductData } from './product.types';

const BASE_URL = 'https://dummyjson.com';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProducts: builder.query<IProductData, number>({
      query: (skip: number) => `/products?skip=${skip}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache?.products?.push(...newItems?.products);
        currentCache.skip = newItems?.skip;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getProductDetail: builder.query<IProduct, number>({
      query: productId => `/products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi;
