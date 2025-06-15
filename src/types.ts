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
}
