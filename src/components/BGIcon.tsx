import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BGIconProps} from '../types';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcons from './CustomIcons';

const BGIcon: React.FC<BGIconProps> = memo(({name, color, size, BGColor}) => {
  return (
    <View style={[Styles.IconBG, {backgroundColor: BGColor}]}>
      <CustomIcons name={name} color={color} size={size} />
    </View>
  );
});

const Styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGIcon;
