import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dummyjson.com';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProducts: builder.query<any, void>({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
