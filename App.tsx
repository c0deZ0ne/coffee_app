/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigation/TabNavigator';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}} >
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
