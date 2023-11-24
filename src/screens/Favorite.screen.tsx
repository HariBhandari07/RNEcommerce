import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  favoriteItemsSelector,
  toggleFavorite,
} from '../redux/favorites/favoriteSlice';
import { theme } from '../theme';
import { BackButton } from '../components/Button/BackButton';
import { IProduct } from '../api/product/product.types';
import { HeartIcon } from '../components/Icons/Icons';

export function Favorite() {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(favoriteItemsSelector);

  const handleToggleFavorite = (product: IProduct) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <View style={styles.favoritesContainer}>
      {(Array.isArray(favoriteProducts) && favoriteProducts.length) === 0 ? (
        <View>
          <Text style={{ color: theme.black90 }}>
            No Product found. Please favorite some products.
          </Text>
        </View>
      ) : null}
      {(Array.isArray(favoriteProducts) && favoriteProducts.length) > 0 ? (
        <>
          <View style={styles.header}>
            <BackButton />
            <Text style={styles.title}>
              Favorites ({favoriteProducts.length})
            </Text>
          </View>
          <ScrollView>
            {favoriteProducts.map(product => (
              <View key={product.id} style={styles.itemContainer}>
                <View style={styles.productInfo}>
                  <Image
                    source={{ uri: product?.thumbnail }}
                    style={styles.thumbnail}
                  />
                  <View>
                    <Text style={styles.productName}>{product.title}</Text>
                    <Text style={styles.price}>
                      ${product.price.toFixed(2)}
                    </Text>
                  </View>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleToggleFavorite(product)}>
                    <HeartIcon />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1E222B',
    marginLeft: 21,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EBEBFB',
    paddingBottom: 16,
    paddingTop: 20,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 7,
    marginRight: 26,
  },
  productName: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1E222B',
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E222B',
    lineHeight: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    height: 40,
    width: 40,
    backgroundColor: theme.black1,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
