export const getCategories = (data: any) => {
  let _temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (_temp[data[i].name] === undefined) {
      _temp[data[i].name] = 1;
    } else {
      _temp[data[i].name] += 1;
    }
  }
  const _categories = Object.keys(_temp);
  _categories.unshift('All');
  return _categories;
};

export const getCoffeeList = ({
  data,
  category,
}: {
  data: any;
  category: string;
}) => {
  if (category === 'All') {
    return data;
  } else {
    const _coffeeList = data.filter((item: any) => item.name === category);
    return _coffeeList;
  }
};
