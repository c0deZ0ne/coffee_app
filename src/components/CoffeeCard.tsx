/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CoffeeCardProps} from '../types';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcons from './CustomIcons';
import BGIcon from './BGIcon';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const cardWidth = Dimensions.get('window').width * 0.35;
const CoffeeCard: React.FC<CoffeeCardProps> = memo(
  ({
    name,
    id,
    index,
    type,
    roasted,
    imageLink_square,
    special_ingredient,
    average_rating,
    price,
  }) => {
    return (
      <View style={styles.CardContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.CardLinearGradientContainer}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <ImageBackground
            style={styles.CardImageBG}
            source={imageLink_square}
            resizeMethod={'resize'}>
            <View style={styles.CardRatingContainer}>
              <CustomIcons
                name={'star'}
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_10}
              />
              <Text style={styles.RatingText}>{average_rating}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.CardTitle}>{name}</Text>
          <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          <View style={styles.CardFooterRow}>
            <Text style={styles.CardPriceCurrency}>
              {'$ '}
              <Text style={styles.CardPrice}>{`${price}`}</Text>
            </Text>

            <TouchableOpacity>
              <BGIcon
                name={'add'}
                color={COLORS.primaryWhiteHex}
                size={SPACING.space_8}
                BGColor={COLORS.primaryOrangeHex}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  CardContainer: {
    width: Dimensions.get('window').width / 2.5,
    height: 240,
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: BORDERRADIUS.radius_20,
    marginRight: SPACING.space_14,
  },
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_20,
    flex: 1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  CardImageBG: {
    width: cardWidth,
    maxHeight: 120,
    minHeight: 120,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_12,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: SPACING.space_18,
    fontSize: FONTSIZE.size_12,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: SPACING.space_20,
  },
  CardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
    lineHeight: SPACING.space_20,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_12,
  },
  CardPrice: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
  },
  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: SPACING.space_8,
  },
});
export default CoffeeCard;
