import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home.screen';
import { Category } from '../../screens/Category.screen';
import { Favorite } from '../../screens/Favorite.screen';
import { theme } from '../../theme';
import { CategoryIcon, FavoriteIcon, HomeIcon } from '../Icons/Icons';
import { ProductDetail } from '../../screens/ProductDetail.screen';
import { Cart } from '../../screens/Cart.screen';

const BottomTabs = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.black45,
        tabBarInactiveTintColor: theme.black20,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon />;
          }

          if (route.name === 'Category') {
            return <CategoryIcon />;
          }

          if (route.name === 'Favorite') {
            return <FavoriteIcon />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <BottomTabs.Screen
        name="Category"
        component={Category}
        options={{
          title: 'Categories',
        }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: 'Favorite',
        }}
      />
      <BottomTabs.Screen name="ProductDetail" component={ProductDetail} />
      <BottomTabs.Screen name="Cart" component={Cart} />
    </BottomTabs.Navigator>
  );
}
