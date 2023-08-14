import {DefaultTheme} from 'styled-components/native';
import {colors} from "../colors";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.primary,
    caption: colors.caption,
    secondary: colors.secondary,
    active: colors.active,
    inputTextSearch: colors.inputTextSearch,
    backgroundColorSearch: colors.backgroundColorSearch,
    white: colors.white,
  },
  borders: {
    radius: {
      small: 4,
      xxxlarge: 1000,
    },
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
};