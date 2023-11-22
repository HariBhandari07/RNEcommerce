import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGetProductsQuery } from '../api/product/productApiSlice';

export function Home() {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <View style={styles.container}>
      <Text>Ecommerce</Text>
      {data ? <Text>{JSON.stringify(data)}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
