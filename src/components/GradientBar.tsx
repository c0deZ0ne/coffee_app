import {StyleSheet, View} from 'react-native';
import React from 'react';
import {GradientBGIconProps} from '../types';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcons from './CustomIcons';
import {COLORS, SPACING} from '../theme/theme';

const GradientBar: React.FC<GradientBGIconProps> = ({name, color, size}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.LinerGradientBG}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackRGBA]}>
        <CustomIcons name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GradientBar;

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
    width: SPACING.space_36,
    height: SPACING.space_36,
    alignItems: 'center',
  },
  LinerGradientBG: {},
});
