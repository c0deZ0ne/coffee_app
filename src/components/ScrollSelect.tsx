import PropTypes from 'prop-types';
import React, {memo} from 'react';

const ScrollSelect = memo(props => {
  return (
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
            categoryIndex.index == index ? styles.Active : styles.CategoryText
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
  );
});

ScrollSelect.propTypes = {};

export default ScrollSelect;
