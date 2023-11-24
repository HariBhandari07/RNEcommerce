import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/CustomFontText';
import { useRoute } from '@react-navigation/native';
import { useGetProductDetailQuery } from '../api/product/productApiSlice';
import Button from '../components/Button/Button';
import { useAppDispatch } from '../redux/store';
import { addToCart } from '../redux/cart/cartSlice';
import { BackButton } from '../components/Button/BackButton';
import { CartButton } from '../components/Button/CartButton';
import { theme } from '../theme';
import { toggleFavorite } from '../redux/favorites/favoriteSlice';
import { Carousel } from '../components/Carousel/Carousel';
import { Loader } from '../components/Icons/LoadingSpinner';

export function ProductDetail() {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetProductDetailQuery(
      // @ts-ignore
      route?.params?.productId ?? '',
      {
        // @ts-ignore
        skip: !route?.params?.productId,
      },
    );

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleAddToFavorite = () => {
    dispatch(toggleFavorite(data));
  };

  // @ts-ignore
  if (!route.params?.productId) return null;
  return (
    <View>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      )}
      {isError ? (
        <View style={styles.loaderContainer}>
          <Text>Something went wrong. Please try again later.</Text>
        </View>
      ) : null}
      {!isFetching && isSuccess ? (
        <View>
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <BackButton />
              <CartButton variant="black" />
            </View>
            <Text style={styles.productTitle}>{data.title}</Text>
          </View>
          <ScrollView horizontal={false} nestedScrollEnabled>
            <Carousel
              images={data.images}
              onAddToFavorite={handleAddToFavorite}
            />
            <View style={styles.productDetailsContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${data.price}</Text>
                <Text>{data.discountPercentage} % OFF</Text>
              </View>
              <View style={styles.ctaContainer}>
                <Button
                  onPress={handleAddToCart}
                  title="Add To Cart"
                  variant="outlined"
                />
                <Button onPress={handleAddToCart} title="Buy Now" />
              </View>
              <View>
                <Text style={styles.detailsText}>Details</Text>
                <Text style={[styles.detailsText, styles.description]}>
                  {data?.description}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  productTitle: {
    fontSize: 50,
    fontWeight: '800',
    color: '#1E222B',
    marginBottom: 14,
  },
  loaderContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: theme.blue,
    marginRight: 14,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 25,
    paddingBottom: 15,
  },
  thumbnail: {
    width: 250,
    height: 250,
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  productDetailsContainer: {
    paddingTop: 26,
    paddingHorizontal: 20,
    paddingVertical: 56,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#1E222B',
  },
  description: {
    color: '#8891A5',
  },
});
