import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

const EmptyComponent: React.FC<{message: string}> = ({message}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Message}>{message}</Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: 120,
    textAlign: 'center',
    alignItems: 'center',
  },
  Message: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
});
