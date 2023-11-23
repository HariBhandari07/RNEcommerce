import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { BagIcon } from '../Icons/Icons';
import { theme } from '../../theme';
import { useAppSelector } from '../../redux/store';
import { cartItemCount } from '../../redux/cart/cartSlice';
import { useNavigation } from '@react-navigation/native';

interface ICartButtonProps {
  variant?: 'white' | 'black'; // just the color of icon to display
}

export function CartButton({ variant = 'white' }: ICartButtonProps) {
  const cartItemTotalCount = useAppSelector(cartItemCount);
  const navigation = useNavigation();

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity onPress={goToCartPage}>
      <View style={styles.iconContainer}>
        <BagIcon variant={variant} />
        {cartItemTotalCount > 0 ? (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{cartItemTotalCount}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: -10,
    right: -14,
    backgroundColor: theme.darkYellow,
    height: 24,
    minWidth: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
