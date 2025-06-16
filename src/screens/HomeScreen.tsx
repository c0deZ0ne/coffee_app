/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useStore} from '../store/store';
import log from '../utils/logger';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getCategories, getCoffeeList} from '../utils/categories';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderBar} from '../components/HeaderBar';
import SearchInput from '../components/SearchInput';
const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeansList);
  const [categories, setCategories] = React.useState(getCategories(CoffeeList));
  const [search, setSearch] = React.useState('');
  const [categoryIndex, setCategoryIndex] = React.useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffeeList, setSortedCoffeeList] = React.useState(
    getCoffeeList({category: categoryIndex.category, data: CoffeeList}),
  );
  const [sortedBeansList, setSortedBeansList] = React.useState([]);

  useEffect(() => {
    log.debug('sortedCoffeeList', sortedCoffeeList.length);
  }, [sortedCoffeeList]);
  return (
    <View style={styles.screenContainer}>
      <SafeAreaView />
      <StatusBar barStyle="default" backgroundColor={COLORS.primaryBlackRGBA} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainerFlex}>
        <HeaderBar title={'Home'} />
        <Text style={styles.screenTitle}>
          Find The Best{'\n'}Coffee For You
        </Text>
        <SearchInput value={search} handleSearch={setSearch} />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((cat, index) => (
            <View key={index} style={styles.CategoryContainer}>
              <TouchableOpacity
                style={styles.CategoryItem}
                onPress={() => [
                  setCategoryIndex({index, category: categories[index]}),
                  setSortedCoffeeList(
                    getCoffeeList({
                      category: categories[index],
                      data: CoffeeList,
                    }),
                  ),
                ]}>
                <Text
                  style={
                    categoryIndex.index == index
                      ? styles.Active
                      : styles.CategoryText
                  }>
                  {cat}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_extrabold,
    color: COLORS.primaryWhiteHex,
    marginVertical: SPACING.space_12,
  },

  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: SPACING.space_16,
    overflow: 'hidden',
  },

  scrollViewContainerFlex: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  CategoryScrollViewStyle: {
    marginBottom: SPACING.space_16,
  },
  CategoryContainer: {
    paddingHorizontal: SPACING.space_12,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: SPACING.space_16,
  },

  CategoryItem: {},
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  CategoryText: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    flex: 1,
  },
  Active: {
    color: COLORS.primaryOrangeHex,
    flex: 1,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
});
