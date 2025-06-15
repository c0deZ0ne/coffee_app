import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderBar} from '../components/HeaderBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const CartScreen = () => {
  return (
    <View style={styles.Container}>
      <SafeAreaView />
      <HeaderBar title={'Home'} />

      <Text>{'Hello'}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
