/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useStore} from '../store/store';
import log from '../utils/logger';
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
import CoffeeCard from '../components/CoffeeCard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import EmptyComponent from '../components/EmptyComponent';

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
    flexDirection: 'column',
    justifyContent: 'center',
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

  CoffeeFlatListContainer: {
    borderRadius: BORDERRADIUS.radius_20,
    flex: 1,
  },

  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
    marginVertical: SPACING.space_8,
    color: COLORS.primaryLightGreyHex,
  },
});

const HomeScreen = ({navigation}: any) => {
  console.log(navigation);
  const tabBarHeight = useBottomTabBarHeight();
  const CoffeeFlatRef = useRef<FlatList<any>>(null);
  const categoryScrollRef = useRef<ScrollView>(null);
  const categoryItemLayouts = useRef<{
    [key: number]: {x: number; width: number};
  }>({});
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

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

  const resetSearchCoffee = () => {
    CoffeeFlatRef.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffeeList([...CoffeeList]);
    setSearch('');
  };

  useEffect(() => {
    const searchCoffee = (searchString: string) => {
      if (searchString !== '') {
        CoffeeFlatRef.current?.scrollToOffset({
          animated: true,
          offset: 0,
        });
        setCategoryIndex({index: 0, category: categories[0]});
        setSortedCoffeeList([
          ...CoffeeList.filter((item: any) =>
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          ),
        ]);
      }
    };
    searchCoffee(search);
  }, [search, CoffeeList, categories]);
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
        <SearchInput
          value={search}
          handleSearch={setSearch}
          resetSearchCoffee={resetSearchCoffee}
        />

        {/* CATEGORIES */}
        <ScrollView
          ref={categoryScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
          onLayout={e => setScrollViewWidth(e.nativeEvent.layout.width)}>
          {categories.map((cat, index) => (
            <View
              key={index}
              style={styles.CategoryContainer}
              onLayout={event => {
                const {x, width} = event.nativeEvent.layout;
                categoryItemLayouts.current[index] = {x, width};
              }}>
              <TouchableOpacity
                style={styles.CategoryItem}
                onPress={() => {
                  setCategoryIndex({index, category: categories[index]});
                  setSortedCoffeeList(
                    getCoffeeList({
                      category: categories[index],
                      data: CoffeeList,
                    }),
                  );
                  CoffeeFlatRef.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });

                  const layout = categoryItemLayouts.current[index];
                  if (!layout) {
                    return;
                  }

                  const {x, width} = layout;

                  const isOutOfView = x < 0 || x + width > scrollViewWidth;

                  if (isOutOfView) {
                    const scrollOffset = x - 20;
                    categoryScrollRef.current?.scrollTo({
                      x: scrollOffset > 0 ? scrollOffset : 0,
                      animated: true,
                    });
                  }
                }}>
                <Text
                  style={
                    categoryIndex.index == index
                      ? styles.Active
                      : styles.CategoryText
                  }>
                  {cat}
                </Text>
                {categoryIndex.index == index && (
                  <View style={styles.ActiveCategory} />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* COFFEE LIST */}
        <FlatList
          ref={CoffeeFlatRef}
          ListEmptyComponent={<EmptyComponent message={'No Data Available'} />}
          style={styles.CoffeeFlatListContainer}
          keyExtractor={({item, index}) => item?.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffeeList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.push('Details')}>
              <CoffeeCard
                name={item.name}
                id={item.id}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                imageLink_square={item.imagelink_square}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                price={item.prices[0].price}
                buttonPressHandler={() => {
                  // searchCoffee(se);
                }}
              />
            </TouchableOpacity>
          )}
        />

        {/* COFFEE BEANS */}
        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          style={[styles.CoffeeFlatListContainer, {marginBottom: tabBarHeight}]}
          keyExtractor={({item, index}) => item?.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeansList}
          renderItem={({item, index}) => (
            <TouchableOpacity key={item.id}>
              <CoffeeCard
                name={item.name}
                id={item.id}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                imageLink_square={item.imagelink_square}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                price={item.prices[0].price}
                buttonPressHandler={() => {
                  throw new Error('Function not implemented.');
                }}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
