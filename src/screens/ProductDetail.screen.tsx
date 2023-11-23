import React, { useEffect } from 'react';
import { BackHandler, Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetProductDetailQuery } from '../api/product/productApiSlice';

interface IRouteParams {
  productId: number;
}

export function ProductDetail() {
  const route = useRoute();
  const { productId } = route.params as IRouteParams;
  const { data, isLoading, error, isSuccess } = useGetProductDetailQuery(
    productId,
    {
      skip: !productId,
    },
  );

  return (
    <View>
      <Text>Product Details</Text>
      {isLoading && <Text>Loading...</Text>}
      {isSuccess ? (
        <View>
          <Image source={{ uri: data?.thumbnail }} style={styles.thumbnail} />
          <Text>{data?.title}</Text>
          <Text>{data?.description}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 250,
    height: 250,
  },
});
