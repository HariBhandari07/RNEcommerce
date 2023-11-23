import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { addToCart, subtractFromCart } from '../redux/cart/cartSlice';
import { ICartProduct } from '../api/product/product.types';

export function Cart() {
  const dispatch = useAppDispatch();
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
      <Text>Shopping Cart</Text>
      {(Array.isArray(cartProducts) && cartProducts.length) === 0 ? (
        <View>
          <Text>No Product found. Please add some products.</Text>
        </View>
      ) : null}
      {(Array.isArray(cartProducts) && cartProducts.length) > 0 ? (
        <>
          <Text>Shopping Cart ({cartProducts.length})</Text>
          {cartProducts.map(product => (
            <View key={product.id} style={styles.itemContainer}>
              <View style={styles.productInfo}>
                <Image
                  source={{ uri: product?.thumbnail }}
                  style={styles.thumbnail}
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
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

          <View style={styles.summaryContainer}>
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
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    height: 40,
    width: 40,
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  summaryContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 16,
  },
  totalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
