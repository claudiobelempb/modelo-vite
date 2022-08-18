import {
  ThemeColors,
  ThemeFlexType,
  ThemeMediaType,
  ThemeSize
} from '@assets/styles/themes/ThemeType';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
