import React, {memo, useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcons from './CustomIcons';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import {SearchTextInput} from '../types';

const SearchInput: React.FC<SearchTextInput> = memo(
  ({value, handleSearch, resetSearchCoffee}) => {
    const [keyboardStatus, setKeyboardStatus] = useState('Keyboard Hidden');
    const [inputColor, setInputColor] = useState(value?.length > 0);
    useEffect(() => {
      setInputColor(() => value?.length > 0);
    }, [value, setInputColor]);

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus('Keyboard Shown');
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus('Keyboard Hidden');
      });

      console.log(keyboardStatus);
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, [keyboardStatus]);

    const handleClearSearch = () => {
      handleSearch('');
      resetSearchCoffee();
    };
    return (
      <View
        style={[
          styles.InputContainerComponent,
          {
            outlineColor: inputColor
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex,
          },
        ]}>
        <TouchableOpacity>
          <CustomIcons
            name={'search'}
            style={styles.InputIcon}
            size={FONTSIZE.size_10}
            color={
              inputColor ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        </TouchableOpacity>
        <TextInput
          showSoftInputOnFocus={true} // default is true
          style={[styles.TextInput]}
          cursorColor={
            inputColor ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          }
          value={value}
          placeholder="Search for coffee or beans"
          placeholderTextColor="grey"
          onChangeText={handleSearch}
        />
        {value?.length > 0 ? (
          <TouchableOpacity
            onPress={handleClearSearch}
            style={styles.ClearIconContainer}>
            <CustomIcons
              name={'close'}
              style={styles.InputIcon}
              size={FONTSIZE.size_10}
              color={
                inputColor
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  },
);

export default SearchInput;

const styles = StyleSheet.create({
  TextInput: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    flex: 1,
  },

  InputIcon: {},
  TextContainer: {},
  InputContainerComponent: {
    borderRadius: BORDERRADIUS.radius_20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBlockColor: COLORS.primaryLightGreyHex,
    borderStyle: 'solid',
    borderWidth: 0.5,
    outlineStyle: 'solid',
    outlineWidth: 0.5,
    paddingHorizontal: 10,
    flex: 1,
    display: 'flex',
    alignSelf: 'center',
  },

  ClearIconContainer: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
});
