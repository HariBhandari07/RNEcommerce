import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import {
  addToCart,
  cartItemCount,
  subtractFromCart,
} from '../redux/cart/cartSlice';
import { ICartProduct } from '../api/product/product.types';
import Text from '../components/Text/CustomFontText';
import { theme } from '../theme';
import Button from '../components/Button/Button';
import { BackButton } from '../components/Button/BackButton';

export function Cart() {
  const dispatch = useAppDispatch();
  const cartItemTotalCount = useAppSelector(cartItemCount);
  const cartProducts = useAppSelector(
    (state: RootState) => state.cart.cartItems,
  );

  const subtotal = cartProducts.reduce(
    (sum, product) =>
      sum +
      ((product.price * (100 - product.discountPercentage)) / 100) *
        product.cartQty,
    0,
  );
  const deliveryCost = 2; // Constant delivery cost for each item
  const total = subtotal + deliveryCost;

  const handleIncreaseItemCount = (product: ICartProduct) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseItemCount = (product: ICartProduct) => {
    dispatch(subtractFromCart(product));
  };

  return (
    <View style={styles.container}>
      {(Array.isArray(cartProducts) && cartProducts.length) === 0 ? (
        <View>
          <Text>No Product found. Please add some products.</Text>
        </View>
      ) : null}
      {(Array.isArray(cartProducts) && cartProducts.length) > 0 ? (
        <View style={styles.cartContentContainer}>
          <ScrollView>
            <View style={styles.header}>
              <BackButton />
              <Text style={styles.title}>
                Shopping Cart ({cartItemTotalCount})
              </Text>
            </View>
            <View>
              {cartProducts.map(product => (
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
                      onPress={() => handleDecreaseItemCount(product)}>
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{product.cartQty}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => handleIncreaseItemCount(product)}
                      disabled={product.cartQty === product.stock}>
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

          {/*Product Total*/}
          <View style={styles.summaryContainer}>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Subtotal:</Text>
                <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Delivery:</Text>
                <Text style={styles.summaryValue}>
                  ${deliveryCost.toFixed(2)}
                </Text>
              </View>
              <View style={styles.totalItem}>
                <Text style={styles.summaryLabel}>Total:</Text>
                <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
              </View>
            </View>
            <Button onPress={() => {}} title="Proceed to checkout" />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 24,
    backgroundColor: theme.white,
    flex: 1,
  },
  cartContentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
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
  header: {
    marginBottom: 40,
    display: 'flex',
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
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E222B',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#1E222B',
  },

  summaryContainer: {
    borderRadius: 30,
    backgroundColor: theme.black1,
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 30,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#616A7D',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#1E222B',
  },
  totalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  totalValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E222B',
  },
});
