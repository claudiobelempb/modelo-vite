import {
  ThemeColors,
  ThemeFlexType,
  ThemeMediaType,
  ThemeSize
} from '@assets/styles/themes/ThemeType';
import 'styled-components';

import { themeDefault } from '@assets/styles/themes/themeDefault';

type TypeThemeDefault = typeof themeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {
    title: string;
    colors: ThemeColors;
    size: ThemeSize;
    flex: ThemeFlexType;
    fonts: {
      fontFamile: string;
      fontWeight: {
        regular: string;
        bold: string;
        extraBold: string;
      };
    };
    media: ThemeMediaType;
  }
}
