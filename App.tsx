/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
// import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
// import FavoriteScreen from './src/screens/FavoriteScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigation/TabNavigator';
import log from './src/utils/logger';

const stack = createNativeStackNavigator();
const App = () => {
  // useEffect(() => {
  //   log.info('App mounted');
  //   log.info('App is running');
  // }, []);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
