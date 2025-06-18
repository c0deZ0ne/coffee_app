import React, {memo, useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcons from './CustomIcons';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {SearchTextInput} from '../types';

const SearchInput: React.FC<SearchTextInput> = memo(({value, handleSearch}) => {
  const [keyboardStatus, setKeyboardStatus] = useState('Keyboard Hidden');

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
  return (
    <View style={styles.InputContainerComponent}>
      <TouchableOpacity>
        <CustomIcons
          name={'search'}
          style={styles.InputIcon}
          size={FONTSIZE.size_18}
          color={
            value?.length > 0
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex
          }
        />
      </TouchableOpacity>
      <TextInput
        showSoftInputOnFocus={true} // default is true
        style={[styles.TextInput]}
        cursorColor={
          value?.length > 0
            ? COLORS.primaryOrangeHex
            : COLORS.primaryLightGreyHex
        }
        value={value}
        placeholder="Search for coffee or beans"
        placeholderTextColor="grey"
        onChangeText={handleSearch}
      />
    </View>
  );
});

export default SearchInput;

const styles = StyleSheet.create({
  TextInput: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    flex: 1,
  },

  InputIcon: {
    marginHorizontal: SPACING.space_10,
  },
  TextContainer: {
    backgroundColor: 'red',
  },
  InputContainerComponent: {
    // marginVertical: SPACING.space_12,
    // marginHorizontal: SPACING.space_16,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryGreyHex,
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    // height: SPACING.space_18 * 2.8,
  },
});
