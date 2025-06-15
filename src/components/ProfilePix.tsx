import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePix = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};

export default ProfilePix;

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});
