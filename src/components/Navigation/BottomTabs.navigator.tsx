import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home.screen';
import { Category } from '../../screens/Category.screen';
import { Favorite } from '../../screens/Favorite.screen';
import { theme } from '../../theme';
import { CategoryIcon, FavoriteIcon, HomeIcon } from '../Icons/Icons';

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
          // tabBarIcon: () => <SvgUri uri={homeIcon} height={50} width={50} />,
        }}
      />
      <BottomTabs.Screen
        name="Category"
        component={Category}
        options={{
          title: 'Categories',
          // tabBarIcon: () => <SvgUri uri={homeIcon} height={50} width={50} />,
        }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: 'Favorite',
          // tabBarIcon: () => <SvgUri uri={homeIcon} height={50} width={50} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
