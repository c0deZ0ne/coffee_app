/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import log from '../utils/logger';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getCategories, getCoffeeList} from '../utils/categories';
import {COLORS} from '../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderBar} from '../components/HeaderBar';
const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeansList);
  const [categories, setCategories] = React.useState(getCategories(CoffeeList));
  const [search, setSearch] = React.useState(undefined);
  const [categoryIndex, setCategoryIndex] = React.useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffeeList, setSortedCoffeeList] = React.useState(
    getCoffeeList({category: categoryIndex.category, data: CoffeeList}),
  );
  const [sortedBeansList, setSortedBeansList] = React.useState([]);
  return (
    <View style={styles.screenContainer}>
      <SafeAreaView />
      <StatusBar barStyle="default" backgroundColor={COLORS.primaryBlackRGBA} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainerFlex}>
        <HeaderBar title={'Home'} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'red',
    padding: 10,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },

  scrollViewContainerFlex: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
