import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcons from './CustomIcons';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../theme/theme';
import {SearchTextInput} from '../types';

const SearchInput: React.FC<SearchTextInput> = memo(({value, handleSearch}) => {
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
      <Text>SearchInput</Text>
      <TextInput
        style={styles.TextInput}
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  InputIcon: {},
  TextContainer: {},
  InputContainerComponent: {
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryGreyHex,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
