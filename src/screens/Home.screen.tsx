import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useGetProductsQuery } from '../api/product/productApiSlice';
import { HomeIcon } from '../components/Icons/Icons';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../redux/store';
import { IProduct } from '../api/product/product.types';
import { addToFavorite } from '../redux/favorites/favoriteSlice';

const COLUMNS_COUNT = 2;

export function Home() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [skipNumber, setSkipNumber] = React.useState(0);
  const { data, error, isLoading, isFetching } =
    useGetProductsQuery(skipNumber);

  const loadMoreProducts = () => {
    if (data?.products?.length < data?.total) {
      // TODO: check if data?.limit is number
      setSkipNumber(prevValue => prevValue + data?.limit);
    }
  };

  const handleFavoritePress = (product: IProduct) => {
    dispatch(addToFavorite(product));
  };

  const handleProductItemClick = (productId: number) => {
    navigation.navigate('ProductDetail', { productId });
  };

  // Function to render each product item
  const renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => handleProductItemClick(item.id)}>
          <Image source={{ uri: item?.thumbnail }} style={styles.thumbnail} />
          <View style={styles.productInfo}>
            <Text>{item?.title}</Text>
            <Text>{item?.price}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => handleFavoritePress(item)}>
          {/*<Ionicons*/}
          {/*  name={favorites.includes(item.id) ? 'heart' : 'heart-outline'}*/}
          {/*  size={24}*/}
          {/*  color="red"*/}
          {/*/>*/}
          <HomeIcon />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Hari Bhandari</Text>
      {isLoading ? <Text>Loading...</Text> : null}
      {!isLoading && data
        ? Array.isArray(data?.products) &&
          data?.products?.length > 0 && (
            <FlatList
              data={data?.products}
              key={`${COLUMNS_COUNT}`} // Update the key when the number of columns changes
              keyExtractor={item => item.id}
              renderItem={renderItem}
              numColumns={COLUMNS_COUNT}
              onEndReached={loadMoreProducts}
            />
          )
        : null}
      {data &&
        Array.isArray(data?.products) &&
        data?.products?.length === 0 && <Text>No Products Found</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  favoriteIcon: {
    marginLeft: 10,
  },
});
