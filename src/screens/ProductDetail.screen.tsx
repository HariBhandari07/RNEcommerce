import React, { useEffect } from 'react';
import { BackHandler, Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetProductDetailQuery } from '../api/product/productApiSlice';
import Button from '../components/Button/Button';
import { useAppDispatch } from '../redux/store';
import { addToCart } from '../redux/cart/cartSlice';

interface IRouteParams {
  productId: number;
}

export function ProductDetail() {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const { productId } = route.params as IRouteParams;
  const { data, isLoading, error, isSuccess } = useGetProductDetailQuery(
    productId,
    {
      skip: !productId,
    },
  );

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <View>
      <Text>Product Details</Text>
      {isLoading && <Text>Loading...</Text>}
      {isSuccess ? (
        <View>
          <Image source={{ uri: data?.thumbnail }} style={styles.thumbnail} />
          <Text>{data?.title}</Text>
          <Text>{data?.description}</Text>
          <Button
            onPress={handleAddToCart}
            title="Add To Cart"
            variant="outlined"
          />
          <Button onPress={handleAddToCart} title="Buy Now" />
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
