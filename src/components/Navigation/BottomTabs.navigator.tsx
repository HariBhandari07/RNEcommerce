import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home.screen';
import { Category } from '../../screens/Category.screen';
import { Favorite } from '../../screens/Favorite.screen';
import { theme } from '../../theme';
import { CategoryIcon, FavoriteIcon, HomeIcon, MoreIcon } from '../Icons/Icons';
import { ProductDetail } from '../../screens/ProductDetail.screen';
import { Cart } from '../../screens/Cart.screen';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTabs = createBottomTabNavigator();

const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="Product" component={Home} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
  </Stack.Navigator>
);

export function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.darkYellow,
        tabBarInactiveTintColor: theme.black20,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {
          color: '#8891A5',
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarStyle: {
          height: 89,
          paddingTop: 17,
          paddingRight: 42,
          paddingBottom: 31,
          paddingLeft: 46,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: theme.black1,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={focused ? theme.yellow : theme.black100} />;
          }

          if (route.name === 'Category') {
            return (
              <CategoryIcon color={focused ? theme.yellow : theme.black100} />
            );
          }

          if (route.name === 'Favorite') {
            return (
              <FavoriteIcon color={focused ? theme.yellow : theme.black100} />
            );
          }

          if (route.name === 'Cart') {
            return <MoreIcon color={focused ? theme.yellow : theme.black100} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen name="Home" component={HomeStack} />
      <BottomTabs.Screen name="Category" component={Category} />
      <BottomTabs.Screen name="Favorite" component={Favorite} />
      <BottomTabs.Screen name="Cart" component={Cart} />
    </BottomTabs.Navigator>
  );
}
