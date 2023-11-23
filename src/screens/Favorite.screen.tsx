import React from 'react';
import { Text, View } from 'react-native';
import { RootState, useAppSelector } from '../redux/store';

export function Favorite() {
  const favoriteProducts = useAppSelector(
    (state: RootState) => state.favorite.favoriteItems,
  );

  return (
    <View>
      <Text>Favorites</Text>
      {(Array.isArray(favoriteProducts) && favoriteProducts.length) === 0 ? (
        <View>
          <Text>No Product found. Please favorite some products.</Text>
        </View>
      ) : null}
      {(Array.isArray(favoriteProducts) && favoriteProducts.length) > 0 ? (
        <>
          {favoriteProducts.map(product => (
            <View key={product.id}>
              <Text>{product.title}</Text>
            </View>
          ))}
        </>
      ) : null}
    </View>
  );
}
