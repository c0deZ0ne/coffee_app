import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  console.log('CoffeeList', CoffeeList);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'red',
    padding: 10,
  },
});
