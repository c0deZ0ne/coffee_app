import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {HeaderBarProps} from '../types';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBar from './GradientBar';
import ProfilePix from './ProfilePix';

export const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  console.log('HeaderBar rendered with title:', title);
  return (
    <View style={styles.HeaderBarContainer}>
      <GradientBar
        name={'menu'}
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>

      <ProfilePix />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBarContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_18,
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
});
