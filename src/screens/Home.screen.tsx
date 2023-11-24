import React from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/Text/CustomFontText';
import { useGetProductsQuery } from '../api/product/productApiSlice';
import { SearchIcon } from '../components/Icons/Icons';
import { IProduct } from '../api/product/product.types';
import { theme } from '../theme';
import { CartButton } from '../components/Button/CartButton';
import { ProductCard } from '../components/ProductCards/ProductCard';
import { Loader } from '../components/Icons/LoadingSpinner';

const COLUMNS_COUNT = 2;

export function Home() {
  const [skipNumber, setSkipNumber] = React.useState(0);
  const { data, isError, isLoading } = useGetProductsQuery(skipNumber);

  const loadMoreProducts = () => {
    if (data && data?.products.length < data?.total) {
      setSkipNumber(prevValue => prevValue + (data?.limit ?? 0));
    }
  };

  const renderItem = React.useCallback(
    ({ item, index }: { item: IProduct; index: number }) => (
      <ProductCard product={item} index={index} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userCartSection}>
          <Text style={styles.userAddressText}>Hey, Hari</Text>
          <CartButton />
        </View>
        {/*/!*SearchInput*!/*/}
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search Products or store"
            placeholderTextColor="#8891A5"
          />
        </View>
        {/*User Delivery Info*/}
        <View style={styles.userInfoContainer}>
          <View>
            <Text style={styles.userInfoQuestion}>DELIVERY TO</Text>
            <Text style={styles.userInfoAnswer}>Green Way 3000, Sylhet</Text>
          </View>

          <View>
            <Text style={styles.userInfoQuestion}>WITHIN</Text>
            <Text style={styles.userInfoAnswer}>1 Hour</Text>
          </View>
        </View>
      </View>
      {isLoading ? (
        <View
          style={{
            display: 'flex',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loader />
        </View>
      ) : null}
      {!isLoading && data
        ? Array.isArray(data?.products) &&
          data?.products?.length > 0 && (
            <View style={styles.mainContainer}>
              <Text style={styles.recommended}>Recommended</Text>
              <FlatList
                data={data?.products}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                numColumns={COLUMNS_COUNT}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.7}
              />
            </View>
          )
        : null}
      {isError ? (
        <View>
          <Text>Something went wrong. Please try again later.</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.blue,
    padding: 52,
    paddingRight: 21,
    paddingBottom: 12,
    paddingLeft: 20,
  },
  userCartSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userAddressText: {
    fontSize: 22,
    fontWeight: '600',
    color: theme.black1,
  },
  searchContainer: {
    marginTop: 35,
    marginBottom: 29,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.darkBlue,
    borderRadius: 28,
    paddingVertical: 19,
    paddingHorizontal: 28,
    height: 56,
  },
  input: {
    paddingLeft: 12,
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchButton: {},
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoQuestion: {
    fontSize: 11,
    fontWeight: '800',
    color: theme.black1,
    opacity: 0.5,
    marginBottom: 4,
  },
  userInfoAnswer: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.black1,
    fontFamily: 'Manroe',
  },
  recommended: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 38,
    color: '#1E222B',
  },
  mainContainer: {
    backgroundColor: theme.white,
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 60,
  },
});
