import {ImageSourcePropType} from 'react-native';

export interface HeaderBarProps {
  title: string;
  onBackPress?: () => void;
  onSearchPress?: () => void;
  onCartPress?: () => void;
  showBackButton?: boolean;
  showSearchButton?: boolean;
  showCartButton?: boolean;
}

export interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}

export interface SearchTextInput {
  value: string;
  handleSearch: (search: string) => void;
  resetSearchCoffee: () => void;
}

export interface CoffeeCardProps {
  name: string;
  id: string;
  index: number;
  type: string;
  roasted: string;
  imageLink_square: ImageSourcePropType;
  special_ingredient: string;
  average_rating: string;
  price: number;
  buttonPressHandler: () => void;
}

export interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}
