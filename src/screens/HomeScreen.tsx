import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
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
