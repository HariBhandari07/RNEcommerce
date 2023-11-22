import React from 'react';
import { Text, View } from 'react-native';
import { useGetProductsQuery } from '../api/product/productApiSlice';

export function Products() {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <View>
      <Text>Ecommerce</Text>
      {data ? <Text>{JSON.stringify(data)}</Text> : null}
    </View>
  );
}
