import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeartIcon, PlusIcon } from '../Icons/Icons';
import { ICartProduct, IProduct } from '../../api/product/product.types';
import { theme } from '../../theme';
import { addToFavorite } from '../../redux/favorites/favoriteSlice';
import { addToCart } from '../../redux/cart/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../redux/store';

export interface IProductCardProps {
  product: IProduct;
  index: number;
}
export function ProductCard({ product, index }: IProductCardProps) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const handleFavoritePress = (product: IProduct) => {
    dispatch(addToFavorite(product));
  };

  const goToProductDetailsPage = (productId: number) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const handleAddToCart = (product: ICartProduct) => {
    dispatch(addToCart(product));
  };
  return (
    <View
      style={[styles.productContainer, index % 2 !== 0 && { marginLeft: 15 }]}>
      {/*Heart and Image*/}
      <View
        style={{ display: 'flex', flexDirection: 'row', paddingBottom: 46 }}>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => handleFavoritePress(product)}>
          <HeartIcon />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goToProductDetailsPage(product.id)}>
          <Image
            source={{ uri: product?.thumbnail }}
            style={styles.thumbnail}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => goToProductDetailsPage(product.id)}>
        <View style={styles.productInfo}>
          <View style={styles.priceFavContainer}>
            <Text style={styles.productPrice}>${product?.price ?? ''}</Text>
            <TouchableOpacity
              onPress={() => handleAddToCart(product)}
              style={styles.plusIcon}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>{product?.title ?? ''}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: theme.black1,
    borderRadius: 12,
    paddingTop: 13,
    paddingRight: 15,
    paddingBottom: 20,
    paddingLeft: 17,
    flex: 1,
    marginBottom: 22,
  },
  productName: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.24,
    lineHeight: 16,
    color: '#616A7D',
  },
  productPrice: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    color: '#1E222B',
  },
  thumbnail: {
    width: 68,
    height: 68,
    borderRadius: 14,
  },
  productInfo: {
    flex: 1,
  },
  favoriteIcon: {
    marginRight: 15,
  },
  plusIcon: {
    backgroundColor: theme.blue,
    height: 24,
    width: 24,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceFavContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
