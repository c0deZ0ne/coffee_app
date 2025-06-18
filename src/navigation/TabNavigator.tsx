/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {COLORS, SPACING} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import CustomIcons from '../components/CustomIcons';
const tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        tabBarBackground: () => (
          <BlurView
            blurAmount={10}
            style={styles.blurViewStyles}
            overlayColor="transparent"
          />
        ),
      }}>
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              name="home"
              size={SPACING.space_24}
            />
          ),
        }}
      />
      <tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              name="cart"
              size={SPACING.space_24}
            />
          ),
        }}
      />
      <tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              name="like"
              size={SPACING.space_24}
            />
          ),
        }}
      />
      <tab.Screen
        name="order"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcons
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              name="bell"
              size={SPACING.space_24}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};

const styles = StyleSheet.create({
  blurViewStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabBarStyles: {
    height: 50,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    shadowColor: 'transparent',
  },
});
export default TabNavigator;
